import React, { useEffect, useRef, useState } from "react";
import './HomepageLogo.css';
import Ignite from '../../../assets/logos/upscaled_ignite.png';
import StarImg from '../../../assets/otherImgs/star.png';
import * as THREE from 'three';


export default function HomepageLogo() {

    const [loading, setLoading] = useState(true)
    const bgRef = useRef()
    let scene, camera, renderer, stars, starGeo

    function init() {
        //create scene object
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
        camera.position.z = -1;
        camera.rotation.x = Math.PI / 2;

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        bgRef.current.appendChild(renderer.domElement);

        starGeo = new THREE.Geometry();
        for (let i = 0; i < 6000; i++) {
            let star = new THREE.Vector3(
                Math.random() * 600 - 300,
                Math.random() * 600 - 300,
                Math.random() * 600 - 300
            );
            star.velocity = 0;
            star.acceleration = 0.01;
            starGeo.vertices.push(star);
        }

        let sprite = new THREE.TextureLoader().load(StarImg);
        let starMaterial = new THREE.PointsMaterial({
            color: 0xaaaaaa,
            size: 0.65,
            map: sprite
        });

        stars = new THREE.Points(starGeo, starMaterial);
        scene.add(stars);

        window.addEventListener("resize", onWindowResize, false);

        animate();
    }

    //rendering loop
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        starGeo.vertices.forEach(p => {
            p.velocity += p.acceleration
            p.y -= p.velocity;

            if (p.y < -200) {
                p.y = 200;
                p.velocity = 0;
            }
        });
        starGeo.verticesNeedUpdate = true;
        stars.rotation.y += 0.002;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    useEffect(() => {
        init()
        return () => {
            setLoading(true)
        }
    }, [])


    return (
        <div className="main-logo-container">
            <div id="infinity-bg" ref={bgRef}></div>
            <div className="logo-name-container">
                <div className="img-ignite">
                    <img src={Ignite} height="180rem" width="180rem" />
                </div>
                <div className="ignite-text-cont">
                    <p className="ignite-name">IGNITE</p>
                    <p className="ignite-desc">TECHFEST 2K22</p>
                </div>
            </div>
        </div>
    )
}