window.onload = function () {
  const body = document.body;

  console.log(body);

  setInterval(() => {
    daffy.classList.toggle("flap")
    }, 250)
}

let moveDuck = (daffy) => {
  daffy.style.top = `${Math.random() * window.innerHeight}px`;
  daffy.style.left = `${Math.random() * window.innerWidth}px`;
};

let timeClock = (daffy) => { setInterval(moveDuck, 240, daffy); }