import React, { useState } from 'react';
import ThreeScene from '../components/ThreeScene';

export default function Home() {
    const [loading, setLoading] = useState(true);  // Secciones visibles mientras Three.js no esté listo

    // Función que se pasa a ThreeScene para cambiar el estado cuando Three.js esté listo
    const handleThreeJsLoad = () => {
        setTimeout(() => {
            setLoading(false);  // Cambiar a false después de un retraso de 2 segundos
        }, 2000);  // Retraso de 2000 milisegundos (2 segundos)
    };

    return (
        <div className="app-container">
            <ThreeScene onLoad={handleThreeJsLoad} />  {/* Pasa el callback para cambiar el estado */}
            <div className={`sections-container ${!loading ? 'hidden' : ''}`}>
                <div className="section">Bienvenido, Explora el Espacio</div>
                <div className="section">Aquí están las naves</div>
            </div>
        </div>
    );
}


