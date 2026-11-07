"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Activity, Compass, Layers, Maximize2 } from "lucide-react";

interface GeospatialThreeSceneProps {
  className?: string;
  interactive?: boolean;
}

export const GeospatialThreeScene: React.FC<GeospatialThreeSceneProps> = ({
  className = "",
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ lat: 23.8103, lng: 90.4125 });
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 400;
    const height = mount.clientHeight || 400;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 2. Geodetic Coordinate Mesh (Wireframe Sphere)
    const sphereRadius = 1.85;
    const sphereGeometry = new THREE.IcosahedronGeometry(sphereRadius, 3);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x0284c7, // Corporate Logo Blue
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // 3. Dense Point Cloud (Representing GCP Benchmarks & LiDAR Points)
    const particleCount = 750;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x0284c7); // Deep Blue
    const color2 = new THREE.Color(0x38bdf8); // Sky Blue Cyan
    const color3 = new THREE.Color(0x60a5fa); // Bright Indigo Blue

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = sphereRadius + (Math.random() - 0.5) * 0.12;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const mixedColor =
        Math.random() > 0.5 ? color2 : Math.random() > 0.5 ? color1 : color3;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(points);

    // 4. Geodetic Latitude & Longitude Coordinate Rings
    const ringGroup = new THREE.Group();

    // Equator Ring
    const equatorGeo = new THREE.TorusGeometry(sphereRadius * 1.02, 0.008, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.65,
    });
    const equator = new THREE.Mesh(equatorGeo, ringMat);
    equator.rotation.x = Math.PI / 2;
    ringGroup.add(equator);

    // Polar Meridian Ring
    const meridian = new THREE.Mesh(equatorGeo, ringMat);
    ringGroup.add(meridian);

    // Tilted Orbital Geodetic Satellite Baseline
    const orbitGeo = new THREE.TorusGeometry(sphereRadius * 1.25, 0.006, 16, 120);
    const orbitMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
    });
    const orbit = new THREE.Mesh(orbitGeo, orbitMat);
    orbit.rotation.x = Math.PI / 3;
    orbit.rotation.y = Math.PI / 6;
    ringGroup.add(orbit);

    // Satellite Tracker Marker on Orbit
    const satGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const satMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const satellite = new THREE.Mesh(satGeo, satMat);
    scene.add(satellite);

    scene.add(ringGroup);

    // 5. Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!interactive) return;
      const rect = mount.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // 6. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse rotation
      targetX = mouseX * 0.45;
      targetY = mouseY * 0.45;

      sphere.rotation.y += 0.0035;
      sphere.rotation.x += (targetY - sphere.rotation.x) * 0.05;
      sphere.rotation.y += (targetX - sphere.rotation.y * 0.01) * 0.05;

      points.rotation.y = sphere.rotation.y;
      points.rotation.x = sphere.rotation.x;

      ringGroup.rotation.y += 0.002;
      ringGroup.rotation.z += 0.001;

      // Move satellite along orbit
      const orbitAngle = elapsedTime * 0.6;
      satellite.position.x = Math.cos(orbitAngle) * (sphereRadius * 1.25);
      satellite.position.y =
        Math.sin(orbitAngle) * (sphereRadius * 1.25) * Math.sin(Math.PI / 3);
      satellite.position.z =
        Math.sin(orbitAngle) * (sphereRadius * 1.25) * Math.cos(Math.PI / 3);

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  return (
    <div
      className={`relative w-full h-full min-h-[380px] bg-slate-950 overflow-hidden select-none ${className}`}
    >
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Futuristic HUD Top Overlay */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20 pointer-events-none font-mono text-[11px]">
        <div className="flex items-center gap-2 px-2.5 py-1 bg-slate-900/90 border border-sky-500/30 rounded-none shadow-xs backdrop-blur-xs">
          <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-ping" />
          <span className="text-sky-400 font-bold uppercase">
            3D GEODETIC COORD MESH
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 bg-sky-950/80 text-sky-300 border border-sky-500/20 text-[10px] rounded-none">
            THREE.JS v0.182
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 bg-slate-900 text-slate-400 border border-white/10 text-[10px] rounded-none">
            WGS84 / SOB DATUM
          </span>
        </div>
      </div>

      {/* Futuristic HUD Bottom Overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none font-mono text-white flex items-end justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] text-sky-400">
            <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "14s" }} />
            <span>LAT: 23°48&apos;37&quot;N • LNG: 90°24&apos;45&quot;E</span>
          </div>
          <p className="text-xs font-bold text-white tracking-tight">
            Interactive Geodetic GNSS Baseline &amp; Point Cloud
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[10px] text-slate-400">
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          <span>750+ ACTIVE GCP VERTICES</span>
        </div>
      </div>

      {/* Subtle vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 pointer-events-none" />
    </div>
  );
};
