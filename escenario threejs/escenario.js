//escenario
const scene = new THREE.Scene();
var loader = new THREE.TextureLoader();
loader.load("./img/fondo.jpg", function (texture){
    scene.background=texture;
})

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1,1000);
const camera2 = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1,1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement)

//luz

hlight = new THREE.AmbientLight(0xffffff,1)
hlight.position.set(10,10,10);
scene.add(hlight);

directionalLight = new THREE.DirectionalLight (0xfffffff);
directionalLight.position.set(20,20,20);
directionalLight.castShadow = true;
scene.add(directionalLight)

light = new THREE.PointLight(0xc4c4c4,0.1);
light.position.set(1,1,1);
scene.add(light); 




//objetos

let loader1 = new THREE.GLTFLoader();
  loader1.load('../3D/figura 1/scene.gltf', function(gltf){
    personaje = gltf.scene.children[0];
    personaje.scale.set(1.5,1.5,1.5);
    scene.add(gltf.scene);
    animate();
    personaje.position.x = 6;
    personaje.position.y = -3;
    personaje.position.z = 2;
    personaje.rotation.z = -1;

  });

  camera.position.z = 8



//Objeto 2
  
let loader2 = new THREE.GLTFLoader();
loader2.load('../3D/figura 2/scene.gltf', function(gltf){
  personaje2 = gltf.scene.children[0];
  personaje2.scale.set(0.03,0.03,0.03);
  scene.add(gltf.scene);
  animate();
  personaje2.position.x = -5;
  personaje2.position.y = -3;
  personaje2.position.z = 1;


});

camera2.position.z = 450;




const flyControls = new THREE.FlyControls(camera, renderer.domElement)
flyControls.movementSpeed = 0.1;
flyControls.rollSpeed = 0.01;
flyControls.autoForward = false;
flyControls.dragToLock = false;





//animacion
function animate (){
    requestAnimationFrame(animate);
    renderer.render(scene,camera)
}
animate();

