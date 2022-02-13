import * as THREE from "https://cdn.skypack.dev/three";
import Threeasy from "https://cdn.skypack.dev/threeasy/build/threeasy.min.js";

const app = new Threeasy(THREE, {
	preload: { img: "../assets/images/VALIDUS a.png" },
	light: false,
});

app.camera.position.set(0, 1.5, 1);
app.camera.lookAt(0, 0, 0);

const light = new THREE.PointLight(0xffffff, 2, 25);
light.position.set(0, 0.75, 2);
app.scene.add(light);
app.scene.background = new THREE.Color();
app.postload(() => {
	app.img.repeat.set(3, 1);

	const mat = new THREE.MeshStandardMaterial({
		map: app.img,
		transparent: true,
		side: THREE.DoubleSide
	});
	const geo = new THREE.CylinderGeometry(0.15, 0.15, 0.11, 64, 64, 1, true);

	const mesh1 = new THREE.Mesh(geo, mat);
	mesh1.rotation.z = Math.PI * 0.25;
	app.animate(() => {
		mesh1.rotateOnWorldAxis(new THREE.Vector3(-1, 1, 0), -0.002);
	});
	app.scene.add(mesh1);
});
const canvas = document.querySelector('canvas');
canvas.setAttribute('style','width: 100vw;height:auto; position:absolute; transform: translateY(-1000px); z-index:-1;');
