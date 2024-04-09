
const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

const blurring = () => {
  load++;
  //It seems like you might have a question or need assistance with JavaScript, but your message got cut off. Could you provide more details on what you need help with? Whether it's about syntax, functionality, debugging, or something else, I'm here to help!
  if (load > 99) clearInterval(int);
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let int = setInterval(blurring, 30);
