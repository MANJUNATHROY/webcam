const webcamel = document.getElementById("webcam");
const canvasel = document.getElementById("canvas");
const webcam = new Webcam(webcamel, "user", canvasel);
webcam.start();

function takesnap() {
	let pic = webcam.snap();
	document.querySelector("a").href = pic;

}
