window.onload = function () {
  const body = document.body;

  console.log(body);

  setInterval(() => {
    daffy.classList.toggle("flap")
    }, 250)
}