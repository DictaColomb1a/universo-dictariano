import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// Crea la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Fondo espacial
const spaceTexture = new THREE.TextureLoader().load('/assets/2k_stars.jpg');
scene.background = spaceTexture;

// Crea la esfera (planeta) con la textura de la Tierra
const planetTexture = new THREE.TextureLoader().load('/assets/earthx5400x2700.jpg');
const planetGeometry = new THREE.SphereGeometry(1, 32, 32);
const planetMaterial = new THREE.MeshStandardMaterial({ map: planetTexture });
const planet = new THREE.Mesh(planetGeometry, planetMaterial);
scene.add(planet);

// Añade luz para que el planeta sea visible

// const light = new THREE.PointLight(0xffffff, 1.5, 150); // Aumenta la intensidad y el alcance

// Luz principal (simula el sol)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Aumenta la intensidad y el alcance
directionalLight.position.set(3, 3, 3); // Ubica la luz en una posición lejana y diagonal al planeta
scene.add(directionalLight);

// Luz ambiental para rellenar sombras
 const ambientLight = new THREE.AmbientLight(0x404040, 0.4); // Luz suave en todo el ambiente
// scene.add(ambientLight);

 const hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0x333333, 0.9); // Azul cielo y gris oscuro para el suelo
// scene.add(hemisphereLight);

// Posición inicial de la cámara
camera.position.z = 3;

// Función de animación para rotar el planeta
//function animate() {
  //  requestAnimationFrame(animate);
   // planet.rotation.y += 0.004;  // Rotación del planeta sobre su eje Y
    //renderer.render(scene, camera);
//}


// Cargar el modelo del astronauta (usando GLTFLoader)
/*const loader = new GLTFLoader();
let astronaut;
let mixer;  // Mezclador para animaciones (si el modelo tiene animaciones)

// Cargar el modelo 3D del astronauta
loader.load('/assets/astronaut/source/Astronaut.glb', function(gltf) {
    astronaut = gltf.scene;
    astronaut.scale.set(0.5, 0.5, 0.5); // Ajusta el tamaño del astronauta
    astronaut.position.set(1, 0, 0);  // Posición inicial sobre la superficie del planeta
    scene.add(astronaut);

    // Si el modelo tiene animaciones
    if (gltf.animations && gltf.animations.length) {
        mixer = new THREE.AnimationMixer(astronaut);  // Crear el mezclador de animaciones
        gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play(); // Reproducir todas las animaciones del modelo
        });
    }
});

// Animación del astronauta (mover alrededor del planeta)
let angle = 0; // Variable para animar el astronauta

function animateAstronaut() {
    if (astronaut) {
        // Movimiento orbital alrededor del planeta
        angle += 0.01; // Aumenta el ángulo para mover al astronauta
        const radius = 1.2; // Radio para orbitar alrededor del planeta
        const x = radius * Math.cos(angle); // Coordenada x
        const z = radius * Math.sin(angle); // Coordenada z
        const y = Math.sin(angle) * 0.5; // Altura para que el astronauta esté ligeramente sobre el planeta

        // Actualiza la posición del astronauta
        astronaut.position.set(x, y, z);

        // Hace que el astronauta mire hacia el centro del planeta
        astronaut.lookAt(0, 0, 0);
    }
}
*/

/*// Crear el platillo volador
const ufoGroup = new THREE.Group();

// **Disco Principal** (más pequeño)
const ufoDiskGeometry = new THREE.CylinderGeometry(0.2, 0.4, 0.1, 60); // Tamaño del disco
const ufoDiskMaterial = new THREE.MeshStandardMaterial({
    color: 0x444444, // Gris oscuro
    metalness: 0.8,
    roughness: 0.4,
});
const ufoDisk = new THREE.Mesh(ufoDiskGeometry, ufoDiskMaterial);
ufoDisk.rotation.x = Math.PI / 2; // Orientación horizontal
ufoGroup.add(ufoDisk);

// **Cúpula Superior**
const ufoDomeGeometry = new THREE.SphereGeometry(0.1, 32, 32, 0, Math.PI); // Media esfera
const ufoDomeMaterial = new THREE.MeshStandardMaterial({
    color: 0x555555, // Gris oscuro
    metalness: 0.8,
    roughness: 0.3,
});
const ufoDome = new THREE.Mesh(ufoDomeGeometry, ufoDomeMaterial);
ufoDome.position.y = 0.1; // Ubicar sobre el disco
ufoGroup.add(ufoDome);

// **Luz Central Azul**
const centerLightGeometry = new THREE.SphereGeometry(0.05, 16, 16); // Esfera pequeña para la luz central
const centerLightMaterial = new THREE.MeshBasicMaterial({ color: 0x00ccff }); // Luz azul brillante
const centerLight = new THREE.Mesh(centerLightGeometry, centerLightMaterial);
centerLight.position.set(0, -0.02, 0); // Debajo del disco
ufoGroup.add(centerLight);

// **Rayo de Luz Azul**
const rayGeometry = new THREE.CylinderGeometry(0.05, 0.4, 2, 32, 1, true); // Forma de cono invertido
const rayMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ccff,
    opacity: 0.2, // Semi-transparente
    transparent: true,
});
const ray = new THREE.Mesh(rayGeometry, rayMaterial);
ray.position.y = -1; // Posicionado debajo del disco
ufoGroup.add(ray);

// Configuración inicial del platillo
ufoGroup.position.set(0, 1, -10); // Inicialmente en el fondo
scene.add(ufoGroup);

// **Animación del Platillo Volador (Movimiento Lineal)**
function animateUFO() {
    if (ufoGroup.position.z < 3) {
        ufoGroup.position.z += 0.05; // Movimiento hacia adelante
    } else {
        ufoGroup.position.set(0, 1, -10); // Reiniciar posición
    }
}*/




// Crear el platillo volador
const ufoGroup = new THREE.Group();

// **Disco Principal** (más pequeño)
const ufoDiskGeometry = new THREE.CylinderGeometry(0.5, 1, 0.1, 54); // Tamaño del disco
const ufoDiskMaterial = new THREE.MeshStandardMaterial({
    color: 0x444444, // Gris oscuro
    metalness: 0.8,
    roughness: 0.4,
});
const ufoDisk = new THREE.Mesh(ufoDiskGeometry, ufoDiskMaterial);
ufoDisk.rotation.x = Math.PI / 2; // Orientación horizontal
ufoGroup.add(ufoDisk);

// **Cúpula Superior**
const ufoDomeGeometry = new THREE.SphereGeometry(0.3, 32, 32, 0, Math.PI); // Media esfera
const ufoDomeMaterial = new THREE.MeshStandardMaterial({
    color: 0x555555, // Gris oscuro
    metalness: 0.8,
    roughness: 0.3,
});
const ufoDome = new THREE.Mesh(ufoDomeGeometry, ufoDomeMaterial);
ufoDome.position.y = 0.2; // Ubicar sobre el disco
ufoGroup.add(ufoDome);

// **Luz Central Azul**
const centerLightGeometry = new THREE.SphereGeometry(0.05, 16, 16); // Esfera pequeña para la luz central
const centerLightMaterial = new THREE.MeshBasicMaterial({ color: 0x00ccff }); // Luz azul
const centerLight = new THREE.Mesh(centerLightGeometry, centerLightMaterial);
ufoGroup.add(centerLight);

// **Posición Inicial** del platillo (a la derecha en Z, desplazado en X)
ufoGroup.position.set(10, 1, -50); // Empezar a la derecha y lejos de la cámara
scene.add(ufoGroup);

// Velocidad y parámetros de animación
const ufoSpeed = 0.1; // Velocidad del movimiento
const maxSize = 2.0;  // Escala máxima del platillo
const minSize = 0.5;  // Escala mínima del platillo

// Función de animación
function animateUFO() {
    // Mover el platillo hacia adelante en el eje Z
    ufoGroup.position.z += ufoSpeed;

    // Incrementar la escala a medida que se acerca
    const scaleFactor = (50 - ufoGroup.position.z) / 50; // A medida que se acerca, escala más
    ufoGroup.scale.set(scaleFactor * (maxSize - minSize) + minSize, scaleFactor * (maxSize - minSize) + minSize, scaleFactor * (maxSize - minSize) + minSize);

    // Cuando el platillo llega a la cámara, reiniciar la posición
    if (ufoGroup.position.z > 0) {
        ufoGroup.position.z = -50; // Reiniciar a la posición inicial lejos
        ufoGroup.scale.set(minSize, minSize, minSize); // Restablecer escala
    }
}






// **Partículas**
const particlesGroup = new THREE.Group(); // Crear un grupo para las partículas
const sphereCount = 900; // Número de partículas
const particles = []; // Arreglo para almacenar las partículas

for (let i = 0; i < sphereCount; i++) {
    const geometry = new THREE.SphereGeometry(0.1, 8, 8); // Pequeñas esferas como partículas
    const material = new THREE.MeshBasicMaterial({
        color: 0x888888, // gris oscuro
        transparent: true,
        opacity: Math.random() * 0.7 + 0.3, // Opacidad aleatoria
    });
    const particle = new THREE.Mesh(geometry, material);
    particle.position.set(
        Math.random() * 100 - 50, // Posición aleatoria en X
        Math.random() * 100 - 50, // Posición aleatoria en Y
        Math.random() * -200 // Profundidad aleatoria en Z
    );
    particles.push(particle); // Agregar la partícula al arreglo
    particlesGroup.add(particle); // Agregar al grupo de partículas
}

scene.add(particlesGroup); // Agregar las partículas a la escena principal

// **Animación de las Partículas**
function animateParticles() {
    particles.forEach((particle) => {
        particle.position.z += 0.2; // Movimiento hacia adelante en Z
        if (particle.position.z > 100) {
            // Reiniciar posición cuando salga del campo de visión
            particle.position.z = Math.random() * -200;
            particle.position.x = Math.random() * 100 - 50;
            particle.position.y = Math.random() * 100 - 50;
        }
        // Variar ligeramente la opacidad para simular parpadeo
        particle.material.opacity = Math.random() * 0.7 + 0.3;
    });
}

// Cargar el modelo 3D del meteorito
const loader1 = new GLTFLoader();
let meteorite;

// Cargar el modelo del meteorito
loader1.load('/assets/meteor/meteor.glb', function(gltf) {
    meteorite = gltf.scene;
    
    // Posición inicial del meteorito fuera de la cámara, en el lado izquierdo
    meteorite.position.set(-30, 0, -50);  // Lejos de la cámara en Z
    scene.add(meteorite);
}, 
function (xhr) {
    // Monitoreo del progreso de carga
    console.log((xhr.loaded / xhr.total * 100) + '% cargado');
}, 
function (error) {
    // Muestra cualquier error que ocurra
    console.error('Error cargando el meteorito: ', error);
});

// Posición inicial de la cámara
camera.position.z = 3;

// Velocidades de movimiento
let meteoriteSpeed = 0.1;  // Velocidad del meteorito

// Rango del movimiento en el eje Z
const startZ = -50;  // Posición inicial en Z (lejos de la cámara)
const endZ = 10;     // Posición final en Z (cerca de la cámara)

// Variables para controlar la escala del meteorito
let startScale = 0.1;  // Escala inicial del meteorito (pequeño)
let endScale = 5.0;    // Escala final del meteorito (grande)

function animateMeteorite() {
    if (meteorite) {
        // Mover el meteorito hacia adelante en el eje Z
        meteorite.position.z += meteoriteSpeed;

        // Interpolación para hacer que la escala crezca a medida que el meteorito se acerca
        let progress = (meteorite.position.z - startZ) / (endZ - startZ);
        let scale = startScale + (endScale - startScale) * progress;
        meteorite.scale.set(scale, scale, scale);  // Ajustar la escala en todos los ejes

        // Si el meteorito pasa la posición final, reiniciar su posición y escala
        if (meteorite.position.z > endZ) {
            meteorite.position.z = startZ;
            meteorite.scale.set(startScale, startScale, startScale);  // Restablecer la escala
        }
    }
}

/*Crear la estrella fugaz
const starGeometry = new THREE.SphereGeometry(0.04, 30, 30);
const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const shootingStar = new THREE.Mesh(starGeometry, starMaterial);
shootingStar.position.set(-9, -5, -9); // Posición inicial
scene.add(shootingStar);

// Crear el rastro de la estrella fugaz
const trailGeometry = new THREE.BufferGeometry();
const trailMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true });
const trailVertices = new Float32Array(6); // Línea entre 2 puntos
trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailVertices, 3));
const starTrail = new THREE.Line(trailGeometry, trailMaterial);
scene.add(starTrail);


// Animación de la estrella fugaz
function animateShootingStar() {
    if (shootingStar.position.x < 5) {
        shootingStar.position.x += 0.1; // Movimiento hacia la derecha
        shootingStar.position.y -= 0.03; // Movimiento descendente
        shootingStar.position.z += 0.05; // Movimiento hacia adelante

        // Actualizar rastro
        const positions = starTrail.geometry.attributes.position.array;
        positions[0] = shootingStar.position.x;
        positions[1] = shootingStar.position.y;
        positions[2] = shootingStar.position.z;
        positions[3] = shootingStar.position.x - 0.5;
        positions[4] = shootingStar.position.y + 0.2;
        positions[5] = shootingStar.position.z - 0.5;
        starTrail.geometry.attributes.position.needsUpdate = true;
    } else {
        shootingStar.position.set(-5, 2, -5); // Reiniciar posición
    }
}

*/


// Animación general
function animate() {
    requestAnimationFrame(animate);

    // Rotación del planeta
    planet.rotation.y += 0.004;

    // Animar el platillo y la estrella fugaz
    animateUFO();
    //animateShootingStar();
    animateParticles();
    
      // Animar el astronauta
     //animateAstronaut();
      // Actualizar animaciones del modelo (si tiene animaciones)
      /*if (mixer) {
          mixer.update(0.01); // Actualiza las animaciones
      }*/


      animateMeteorite();

   

      
    renderer.render(scene, camera);
}


// Ajustar tamaño del renderizador
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix(); // Actualiza la matriz de proyección
});

// Iniciar la animación
animate();
