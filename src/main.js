import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
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

const loader2 = new OBJLoader();
let ufo; // Variable para el platillo

// Cargar el modelo del platillo
loader2.load(
    '/assets/platillo/UFO.obj', // Ruta del modelo
    function (object) {
        ufo = object;

        // Posición inicial del platillo fuera de la cámara, en el lado derecho
        ufo.position.set(30, 0, -50); // Posición inicial: a la derecha (X positivo) y lejos en Z
        ufo.scale.set(0.5, 0.5, 0.5); // Ajustar el tamaño si es necesario
        scene.add(ufo); // Añadir a la escena
        console.log('Platillo cargado con éxito');
    },
    function (xhr) {
        // Progreso de carga
        console.log((xhr.loaded / xhr.total * 100) + '% cargado');
    },
    function (error) {
        // Manejo de errores
        console.error('Error cargando el platillo:', error);
    }
);

// Variables para el movimiento y escala del platillo
let ufoSpeedZ = 0.1;     // Velocidad en Z (hacia adelante)
let ufoSpeedX = -0.05;   // Velocidad en X (hacia el centro)
const startXUFO = 30;    // Posición inicial en X (derecha)
const endXUFO = 0;       // Posición final en X (centro)
const startZUFO = -50;   // Posición inicial en Z (lejos de la cámara)
const endZUFO = 10;      // Posición final en Z (cerca de la cámara)
let startScaleUFO = 0.2; // Escala inicial del platillo
let endScaleUFO = 1.0;   // Escala final del platillo

// Animación del platillo
function animateUFO() {
    if (ufo) {
        // Mover el platillo hacia adelante en el eje Z
        ufo.position.z += ufoSpeedZ;

        // Mover el platillo desde la derecha hacia el centro en el eje X
        ufo.position.x += ufoSpeedX;

        // Interpolación para hacer que la escala crezca a medida que el platillo se acerca
        let progressZ = (ufo.position.z - startZUFO) / (endZUFO - startZUFO);
        let scale = startScaleUFO + (endScaleUFO - startScaleUFO) * progressZ;
        ufo.scale.set(scale, scale, scale); // Ajustar la escala en todos los ejes

        // Si el platillo pasa la posición final, reiniciar su posición y escala
        if (ufo.position.z > endZUFO) {
            ufo.position.set(startXUFO, 0, startZUFO); // Reiniciar posición (derecha y lejos)
            ufo.scale.set(startScaleUFO, startScaleUFO, startScaleUFO); // Restablecer la escala
        }
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
const rockets = [];

function createRocket(position) {
    const rocketGroup = new THREE.Group();

    // Cuerpo del cohete
    const bodyGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 32);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    rocketGroup.add(body);

    // Nariz del cohete
    const noseGeometry = new THREE.ConeGeometry(0.1, 0.3, 32);
    const noseMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    const nose = new THREE.Mesh(noseGeometry, noseMaterial);
    nose.position.y = 0.65;
    rocketGroup.add(nose);

    // Colas del cohete
    const finGeometry = new THREE.BoxGeometry(0.05, 0.2, 0.05);
    const finMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
    for (let i = 0; i < 3; i++) {
        const fin = new THREE.Mesh(finGeometry, finMaterial);
        fin.position.set(
            Math.cos((i * Math.PI * 2) / 3) * 0.2,
            -0.5,
            Math.sin((i * Math.PI * 2) / 3) * 0.2
        );
        fin.rotation.y = (i * Math.PI * 2) / 3;
        rocketGroup.add(fin);
    }

    // Posicionar el cohete en el espacio
    rocketGroup.position.set(position.x, position.y, position.z);
    scene.add(rocketGroup);
    rockets.push(rocketGroup);
}

// Crear 3 cohetes en posiciones diferentes
// Crear cohetes en posiciones más cercanas (por delante del planeta)
createRocket({ x: -1.5, y: -0.8, z: 5 });
createRocket({ x: 0, y: -0.8, z: 5 });
createRocket({ x: 1.5, y: -0.8, z: 5 });


let scrollY = 0;
let maxScrollY = 2000; // Ajusta según la longitud de tu scroll

window.addEventListener('scroll', () => {
    scrollY = window.scrollY;

    // Interpolación para alejar la cámara según el scroll
    const progress = scrollY / maxScrollY; // Rango [0, 1]
    camera.position.z = 3 + progress * 10; // Desde 3 hasta 13
    camera.position.y = progress * -2; // Desplazar hacia abajo

    // Opcional: Rotar o alejar el planeta
    planet.rotation.y += progress * 0.01;

    // Mostrar los cohetes gradualmente
    rockets.forEach((rocket, index) => {
        rocket.visible = scrollY > maxScrollY * (0.3 + index * 0.1); // Aparecen progresivamente
        rocket.visible = scrollY > appearThreshold; // Aparecen progresivamente

    });
});

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', (event) => {
    // Convertir coordenadas del mouse a espacio normalizado
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Configurar raycaster
    raycaster.setFromCamera(mouse, camera);

    // Detectar intersecciones con los cohetes
    const intersects = raycaster.intersectObjects(rockets, true);

    if (intersects.length > 0) {
        const clickedRocket = intersects[0].object;
        console.log('Cohete clicado:', clickedRocket);

        // Acción personalizada (redirigir, mover cámara, etc.)
        camera.position.set(clickedRocket.position.x, clickedRocket.position.y, clickedRocket.position.z + 2);
    }
});

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

