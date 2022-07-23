import * as THREE from 'three';

var SEPARATION = 40, AMOUNTX = 130, AMOUNTY = 35;

var container;
var camera, scene, renderer;

var particles, particle, count = 100;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;


window.onload = function() {
    init();
    animate();
}


function init() {
    container = document.getElementById('waves');

    console.log(window.innerWidth / window.innerHeight)
	camera = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 15, 1500 );
	camera.position.y = 250; //changes how far back you can see i.e the particles towards horizon
	camera.position.z = 200; //This is how close or far the particles are seen
	camera.rotation.x = .15;
	
	scene = new THREE.Scene();

	particles = new Array();

	var PI2 = Math.PI * 4;
	var material = new THREE.SpriteCanvasMaterial( {

		color: 0x3C3D46,
		program: function ( context ) {
			context.beginPath();
			context.arc( 1, 0, 0.1, 0, PI2, true );
			context.fill();
		}
	});

	var i = 0;

	for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
		for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
			particle = particles[ i ++ ] = new THREE.Sprite( material );
			particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
			particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) - 240 );
			scene.add( particle );
		}
	}

	renderer = new THREE.CanvasRenderer();
	renderer.setSize( window.innerWidth, 798);
	renderer.setClearColor( 0x141627, 1);

	container.appendChild( renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, 798);

}

function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {
	var i = 0;

	for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
		for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
			particle = particles[ i++ ];
			particle.position.y = ( Math.sin( ( ix + count ) * 0.5 ) * 20 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 20 );
			particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.5 ) + 4 ) * 4 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;
		}
	}

	renderer.render( scene, camera );
	count += 0.03;
}

