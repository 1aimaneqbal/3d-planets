import { OrbitControls } from './scripts/OrbitControls.js';

let mercuryContainer, venusContainer, earthContainer, marsContainer, jupiterContainer, saturnContainer, uranusContainer, neptuneContainer
let mercuryCamera, venusCamera, earthCamera, marsCamera, jupiterCamera, saturnCamera, uranusCamera, neptuneCamera
let mercuryRenderer, venusRenderer, earthRenderer, marsRenderer, jupiterRenderer, saturnRenderer, uranusRenderer, neptuneRenderer
let mercuryScene, venusScene, earthScene, marsScene, jupiterScene, saturnScene, uranusScene, neptuneScene
let mercuryModel, venusModel, earthModel, marsModel, jupiterModel, saturnModel, uranusModel, neptuneModel
let mercuryControl, venusControl, earthControl, marsControl, jupiterControl, saturnControl, uranusControl, neptuneControl

function mercuryInit() {
    mercuryContainer = document.querySelector(".mercury")
    venusContainer = document.querySelector(".venus")
    earthContainer = document.querySelector(".earth")
    marsContainer = document.querySelector(".mars")
    jupiterContainer = document.querySelector(".jupiter")
    saturnContainer = document.querySelector(".saturn")
    uranusContainer = document.querySelector(".uranus")
    neptuneContainer = document.querySelector(".neptune")
    mercuryScene = new THREE.Scene();
    venusScene = new THREE.Scene();
    earthScene = new THREE.Scene();
    marsScene = new THREE.Scene();
    jupiterScene = new THREE.Scene();
    saturnScene = new THREE.Scene();
    uranusScene = new THREE.Scene();
    neptuneScene = new THREE.Scene();
    const fov = 35
    const aspect = mercuryContainer.clientWidth / mercuryContainer.clientHeight
    const near = 0.000001
    const far = 50000
    mercuryCamera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    venusCamera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    earthCamera = new THREE.PerspectiveCamera(fov, aspect, 0.001, 500)
    marsCamera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    jupiterCamera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    saturnCamera = new THREE.PerspectiveCamera(fov, aspect, 0.001, 500)
    uranusCamera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    neptuneCamera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    mercuryCamera.position.set(0, 0, 3700)
    venusCamera.position.set(0, 0, 3000)
    earthCamera.position.set(0, 0, 1.5)
    marsCamera.position.set(0, 0, 3200)
    jupiterCamera.position.set(0, 0, 2200)
    saturnCamera.position.set(0, 0, 0.65)
    // saturnCamera.position.set(0, 0, 2800)
    uranusCamera.position.set(0, 0, 3300)
    neptuneCamera.position.set(0, 0, 3100)
    const ambientMercury = new THREE.AmbientLight(0x404040, 3)
    const ambientVenus = new THREE.AmbientLight(0x404040, 1)
    const ambientEarth = new THREE.AmbientLight(0x404040, 1)
    const ambientMars = new THREE.AmbientLight(0x404040, 1.5)
    const ambientJupiter = new THREE.AmbientLight(0x404040, 1)
    const ambientSaturn = new THREE.AmbientLight(0x404040, 2)
    const ambientUranus = new THREE.AmbientLight(0x404040, 0.5)
    const ambientNeptune = new THREE.AmbientLight(0x404040, 0.5)
    mercuryScene.add(ambientMercury)
    venusScene.add(ambientVenus)
    earthScene.add(ambientEarth)
    marsScene.add(ambientMars)
    jupiterScene.add(ambientJupiter)
    saturnScene.add(ambientSaturn)
    uranusScene.add(ambientUranus)
    neptuneScene.add(ambientNeptune)
    const sunMercury = new THREE.PointLight(0xffffff, 6)
    const sunVenus = new THREE.PointLight(0xffffff, 2)
    const sunEarth = new THREE.PointLight(0xffffff, 1.5)
    const sunMars = new THREE.PointLight(0xffffff, 2.5)
    const sunJupiter = new THREE.PointLight(0xffffff, 1)
    const sunSaturn = new THREE.PointLight(0xffffff, 1)
    const sunUranus = new THREE.PointLight(0xffffff, 1.5)
    const sunNeptune = new THREE.PointLight(0xffffff, 0.5)
    sunMercury.position.set(-20000, 0, 3000)
    sunVenus.position.set(-20000, 0, 3000)
    sunEarth.position.set(-20000, 0, 3000)
    sunMars.position.set(-20000, 0, 3000)
    sunJupiter.position.set(-20000, 0, 3000)
    sunSaturn.position.set(-20000, 0, 3000)
    sunUranus.position.set(-20000, 0, 3000)
    sunNeptune.position.set(-20000, 0, 3000)
    mercuryCamera.add(sunMercury)
    venusCamera.add(sunVenus)
    earthCamera.add(sunEarth)
    marsCamera.add(sunMars)
    jupiterCamera.add(sunJupiter)
    saturnCamera.add(sunSaturn)
    uranusCamera.add(sunUranus)
    neptuneCamera.add(sunNeptune)
    mercuryScene.add(mercuryCamera)
    venusScene.add(venusCamera)
    earthScene.add(earthCamera)
    marsScene.add(marsCamera)
    jupiterScene.add(jupiterCamera)
    saturnScene.add(saturnCamera)
    uranusScene.add(uranusCamera)
    neptuneScene.add(neptuneCamera)
    mercuryRenderer = new THREE.WebGLRenderer({antialias: true, alpha: false})
    venusRenderer = new THREE.WebGLRenderer({antialias: true, alpha: false})
    earthRenderer = new THREE.WebGLRenderer({antialias: true, alpha: false})
    marsRenderer = new THREE.WebGLRenderer({antialias: true, alpha: false})
    jupiterRenderer = new THREE.WebGLRenderer({antialias: true, alpha: false})
    saturnRenderer = new THREE.WebGLRenderer({antialias: true, alpha: false})
    uranusRenderer = new THREE.WebGLRenderer({antialias: true, alpha: false})
    neptuneRenderer = new THREE.WebGLRenderer({antialias: true, alpha: false})
    mercuryRenderer.setSize(mercuryContainer.clientWidth, mercuryContainer.clientHeight)
    venusRenderer.setSize(venusContainer.clientWidth, venusContainer.clientHeight)
    earthRenderer.setSize(earthContainer.clientWidth, earthContainer.clientHeight)
    marsRenderer.setSize(marsContainer.clientWidth, marsContainer.clientHeight)
    jupiterRenderer.setSize(jupiterContainer.clientWidth, jupiterContainer.clientHeight)
    saturnRenderer.setSize(saturnContainer.clientWidth, saturnContainer.clientHeight)
    uranusRenderer.setSize(uranusContainer.clientWidth, uranusContainer.clientHeight)
    neptuneRenderer.setSize(neptuneContainer.clientWidth, neptuneContainer.clientHeight)
    mercuryRenderer.setPixelRatio(window.devicePixelRatio)
    venusRenderer.setPixelRatio(window.devicePixelRatio)
    earthRenderer.setPixelRatio(window.devicePixelRatio)
    marsRenderer.setPixelRatio(window.devicePixelRatio)
    jupiterRenderer.setPixelRatio(window.devicePixelRatio)
    saturnRenderer.setPixelRatio(window.devicePixelRatio)
    uranusRenderer.setPixelRatio(window.devicePixelRatio)
    neptuneRenderer.setPixelRatio(window.devicePixelRatio)
    mercuryContainer.appendChild(mercuryRenderer.domElement)
    venusContainer.appendChild(venusRenderer.domElement)
    earthContainer.appendChild(earthRenderer.domElement)
    marsContainer.appendChild(marsRenderer.domElement)
    jupiterContainer.appendChild(jupiterRenderer.domElement)
    saturnContainer.appendChild(saturnRenderer.domElement)
    uranusContainer.appendChild(uranusRenderer.domElement)
    neptuneContainer.appendChild(neptuneRenderer.domElement)
    mercuryControl = new OrbitControls(mercuryCamera, mercuryRenderer.domElement)
    mercuryControl.enablePan = false
    // mercuryControl.minPolarAngle = Math.PI /2
    // mercuryControl.maxPolarAngle = Math.PI /2
    mercuryControl.enableDamping = true
    venusControl = new OrbitControls(venusCamera, venusRenderer.domElement)
    venusControl.enablePan = false
    // venusControl.minPolarAngle = Math.PI /2
    // venusControl.maxPolarAngle = Math.PI /2
    venusControl.enableDamping = true
    earthControl = new OrbitControls(earthCamera, earthRenderer.domElement)
    earthControl.enablePan = false
    // earthControl.minPolarAngle = Math.PI /2
    // earthControl.maxPolarAngle = Math.PI /2
    earthControl.enableDamping = true
    marsControl = new OrbitControls(marsCamera, marsRenderer.domElement)
    marsControl.enablePan = false
    // marsControl.minPolarAngle = Math.PI /2
    // marsControl.maxPolarAngle = Math.PI /2
    marsControl.enableDamping = true
    jupiterControl = new OrbitControls(jupiterCamera, jupiterRenderer.domElement)
    jupiterControl.enablePan = false
    // jupiterControl.minPolarAngle = Math.PI /2
    // jupiterControl.maxPolarAngle = Math.PI /2
    jupiterControl.enableDamping = true
    saturnControl = new OrbitControls(saturnCamera, saturnRenderer.domElement)
    saturnControl.enablePan = false
    // saturnControl.minPolarAngle = Math.PI /2 +0.01
    // saturnControl.maxPolarAngle = Math.PI /2
    saturnControl.enableDamping = true
    uranusControl = new OrbitControls(uranusCamera, uranusRenderer.domElement)
    uranusControl.enablePan = false
    // uranusControl.minPolarAngle = Math.PI /2
    // uranusControl.maxPolarAngle = Math.PI /2
    uranusControl.enableDamping = true
    neptuneControl = new OrbitControls(neptuneCamera, neptuneRenderer.domElement)
    neptuneControl.enablePan = false
    // neptuneControl.minPolarAngle = Math.PI /2
    // neptuneControl.maxPolarAngle = Math.PI /2
    neptuneControl.enableDamping = true
    let loaderMercury = new THREE.GLTFLoader()
    loaderMercury.load('./3d/mercury/mercury.glb', function(gltf){
        mercuryScene.add(gltf.scene)
        mercuryModel = gltf.scene.children[0]
        animateMercury()
    })
    let loaderVenus = new THREE.GLTFLoader()
    loaderVenus.load('./3d/venus/venus.glb', function(gltf){
        venusScene.add(gltf.scene)
        venusModel = gltf.scene.children[0]
        animateVenus()
    })
    let loaderEarth = new THREE.GLTFLoader()
    loaderEarth.load('./3d/earth/earth.gltf', function(gltf){
        earthScene.add(gltf.scene)
        earthModel = gltf.scene.children[0]
        earthModel.translateY(-0.275)
        animateEarth()
    })
    let loaderMars = new THREE.GLTFLoader()
    loaderMars.load('./3d/mars/mars.glb', function(gltf){
        marsScene.add(gltf.scene)
        marsModel = gltf.scene.children[0]
        animateMars()
    })
    let loaderJupiter = new THREE.GLTFLoader()
    loaderJupiter.load('./3d/jupiter/jupiter.glb', function(gltf){
        jupiterScene.add(gltf.scene)
        jupiterModel = gltf.scene.children[0]
        animateJupiter()
    })
    let loaderSaturn = new THREE.GLTFLoader()
    loaderSaturn.load('./3d/saturn/saturn.gltf', function(gltf){
        saturnScene.add(gltf.scene)
        saturnModel = gltf.scene.children[0]
        console.log(gltf.scene.children.length)
        saturnModel.translateY(-0.0975)
        // gltf.scene.children[0].rotateX(0.5)
        // gltf.scene.children[1].rotateX(0.5)
        // gltf.scene.children[2].rotateX(0.5)
        animateSaturn()
    })
    let loaderUranus = new THREE.GLTFLoader()
    loaderUranus.load('./3d/uranus/uranus.glb', function(gltf){
        uranusScene.add(gltf.scene)
        uranusModel = gltf.scene.children[0]
        animateUranus()
    })
    let loaderNeptune = new THREE.GLTFLoader()
    loaderNeptune.load('./3d/neptune/neptune.glb', function(gltf){
        neptuneScene.add(gltf.scene)
        neptuneModel = gltf.scene.children[0]
        animateNeptune()
    })
}
function animateMercury(){
    requestAnimationFrame(animateMercury)
    mercuryControl.update()
    mercuryModel.rotation.y += 0.01
    mercuryRenderer.render(mercuryScene, mercuryCamera)
}
function animateVenus(){
    requestAnimationFrame(animateVenus)
    venusControl.update()
    venusModel.rotation.y -= 0.005
    venusRenderer.render(venusScene, venusCamera)
}
function animateEarth(){
    requestAnimationFrame(animateEarth)
    earthControl.update()
    earthModel.rotation.y += 0.005
    earthRenderer.render(earthScene, earthCamera)
}
function animateMars(){
    requestAnimationFrame(animateMars)
    marsControl.update()
    marsModel.rotation.y += 0.005
    marsRenderer.render(marsScene, marsCamera)
}
function animateJupiter(){
    requestAnimationFrame(animateJupiter)
    jupiterControl.update()
    jupiterModel.rotation.y += 0.005
    jupiterRenderer.render(jupiterScene, jupiterCamera)
}
function animateSaturn(){
    requestAnimationFrame(animateSaturn)
    // saturnControl.update()
    saturnModel.rotation.y += 0.005
    saturnRenderer.render(saturnScene, saturnCamera)
}
function animateUranus(){
    requestAnimationFrame(animateUranus)
    uranusControl.update()
    uranusModel.rotation.z += 0.005
    uranusRenderer.render(uranusScene, uranusCamera)
}
function animateNeptune(){
    requestAnimationFrame(animateNeptune)
    neptuneControl.update()
    neptuneModel.rotation.z -= 0.005
    neptuneRenderer.render(neptuneScene, neptuneCamera)
}

mercuryInit()