import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./HorizonBackground.css";

const HorizonBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (process.env.NODE_ENV === "test") return undefined;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05060a, 0.0016);

    const camera = new THREE.PerspectiveCamera(65, 1, 0.1, 1200);
    camera.position.set(0, 22, 115);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));

    const starGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(2600 * 3);
    for (let i = 0; i < positions.length; i += 3) {
      const radius = 130 + Math.random() * 650;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({
        color: 0xc9e3ff,
        size: 0.75,
        transparent: true,
        opacity: 0.78,
        depthWrite: false,
      })
    );
    scene.add(stars);

    const horizon = new THREE.Mesh(
      new THREE.PlaneGeometry(900, 350, 45, 18),
      new THREE.MeshBasicMaterial({ color: 0x091428, wireframe: true, transparent: true, opacity: 0.32 })
    );
    horizon.rotation.x = -Math.PI / 2.6;
    horizon.position.set(0, -65, -160);
    scene.add(horizon);

    let frame;
    let pointerX = 0;
    let pointerY = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const { clientWidth, clientHeight } = canvas;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
    };
    const onPointerMove = (event) => {
      pointerX = event.clientX / window.innerWidth - 0.5;
      pointerY = event.clientY / window.innerHeight - 0.5;
    };
    const render = () => {
      stars.rotation.y += reducedMotion ? 0 : 0.00022;
      camera.position.x += (pointerX * 7 - camera.position.x) * 0.018;
      camera.position.y += (22 - pointerY * 5 - camera.position.y) * 0.018;
      camera.lookAt(0, 0, -120);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      starGeometry.dispose();
      stars.material.dispose();
      horizon.geometry.dispose();
      horizon.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="horizon-background" aria-hidden="true" />;
};

export default HorizonBackground;
