import * as THREE from 'three';

// Crear escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Fondo espacial
const spaceTexture = new THREE.TextureLoader().load('./assets/2k_stars.jpg');
scene.background = spaceTexture;

// Ajustar tamaño en caso de redimensionar ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
});

// Animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
