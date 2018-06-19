let x = 0; 
function draw() {
  let canvas = document.getElementById('canvas'); 
  let can = canvas.getContext('2d'); 
  //c.clearRect(0,0,canvas.width,canvas.height); 
  can.fillStyle = "red"; 
  can.fillRect(x,10,20,10); 
  x += 5; 
} 

function animate(draw, duration) {
   let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // определить, сколько прошло времени с начала анимации
    let timePassed = time - start;

    // возможно небольшое превышение времени, в этом случае зафиксировать конец
    if (timePassed > duration) timePassed = duration;

    // нарисовать состояние анимации в момент timePassed
    draw(timePassed);

    // если время анимации не закончилось - запланировать ещё кадр
    if (timePassed < duration) {
      requestAnimationFrame(animate);
    }

  });
}

button = document.getElementsByClassName('button')[0];

button.addEventListener('click', function(){
  animate(draw, 4000);
});
