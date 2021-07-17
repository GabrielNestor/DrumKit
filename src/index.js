import "./styles.css";

window.addEventListener("keydown", function (e) {
  console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  // const kei = document.querySelector('.key[key-num="${e.keyCode}"]');
  if (!audio) return;
  audio.play();
});
