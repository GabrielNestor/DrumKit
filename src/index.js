import "./styles.css";

var audioClap = new Audio("sounds/clap.wav");
var audioHihat = new Audio("sounds/hihat.wav");
var audioKick = new Audio("sounds/kick.wav");
var audioOpenhat = new Audio("sounds/openhat.wav");
var audioBoom = new Audio("sounds/boom.wav");
var audioRide = new Audio("sounds/ride.wav");
var audioSnare = new Audio("sounds/snare.wav");
var audioTom = new Audio("sounds/tom.wav");
var audioTink = new Audio("sounds/tink.wav");

window.addEventListener("keydown", checkKeyPress);

function checkKeyPress(key) {
  if (key.keyCode === 65) {
    audioClap.play();
  } else if (key.keyCode === 83) {
    audioHihat.play();
  } else if (key.keyCode === 68) {
    audioKick.play();
  } else if (key.keyCode === 70) {
    audioOpenhat.play();
  } else if (key.keyCode === 71) {
    audioBoom.play();
  } else if (key.keyCode === 72) {
    audioRide.play();
  } else if (key.keyCode === 74) {
    audioSnare.play();
  } else if (key.keyCode === 75) {
    audioTom.play();
  } else if (key.keyCode === 76) {
    audioTink.play();
  }
}
