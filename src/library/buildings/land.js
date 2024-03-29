import * as THREE from 'three';

const loader = new THREE.CubeTextureLoader();

function land(l = 50,b = 50){
    
        const material = new THREE.MeshStandardMaterial({
            color: 0xf7cca1,
            metalness: 0.3,
            roughness: 0.4,
            // envMap: environmentMapTexture,
            // envMapIntensity: 0.5
        })
    
    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(l,b),
        material
    );
        
    plane.rotation.x = -(Math.PI*0.5);
    plane.receiveShadow = true;

    return plane
}

export {land}