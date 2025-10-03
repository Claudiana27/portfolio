import React, { useRef, useEffect } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Container, Typography, Box, TextField, Button, Paper } from "@mui/material";

function ThreeScene () {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        mountRef.current.appendChild(renderer.domElement);

     {  /* const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
    controls.dampingFactor = 0.05;*/}

        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
        const sphereMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x2D1B69,
            metalness: 0.8,
            roughness: 0.2,
            clearcoat: 1.0
        })
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = 0;
        scene.add(sphere);

        camera.position.z = 10;

        const animate = () => {
            requestAnimationFrame(animate);

            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.02;
        }
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };

    }, []);
    return (
        <div
            ref={mountRef}
            style={{
                width: '100%',
                height: '500px',
                background: 'linear-gradient(135deg, #121212 0%, #2D1B69 100%'
            }}
        >
        <OrbitControls enablePan enableZoom enableRotate />
        </div>
    )
}
export default ThreeScene;
