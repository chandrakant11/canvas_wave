const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// wave control object
const wave = {
	y: canvas.height,
	length: 0.01,
	amplitude: 100,
	frequency: 0.01
}

// stroke color object
const strokeColor = {
	h: 200,
	s: 50,
	l: 50
}

// background color object
const bgColor = {
	r: 0,
	g: 0,
	b: 0,
	a: 0.01
}

let increment = wave.frequency;

function animate() {
	
	// recursion loop
	requestAnimationFrame(animate);
	ctx.fillStyle = `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`;
	ctx.fillRect(0, 0, innerWidth, innerHeight);

	ctx.beginPath()
	ctx.moveTo(0, canvas.height / 2)

	for(let i=0; i < canvas.width; i++) {
		ctx.lineTo(i, wave.y / 2 + ((Math.sin(i * wave.length + increment) * wave.amplitude) / i) * 100)
	}

	ctx.strokeStyle = `hsl(${strokeColor.h * Math.sin(increment)}, ${strokeColor.s}%, ${strokeColor.l}%)`;
	ctx.stroke();
	increment += -wave.frequency;
}

// draw wave
animate();
