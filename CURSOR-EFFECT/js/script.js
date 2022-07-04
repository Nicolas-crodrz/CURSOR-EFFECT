
// Developed by: Nicolás Cabrera Rodríguez


var cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function(event) {
  let x = event.clientX;
  let y = event.clientY;
  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;
});
