import "bootstrap";
import "./style.css";




window.onload = function generadorExcusas() {
  //write your code here
  let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
  let action = ['comió', 'orinó', 'aplastó', 'rompió'];
  let what = ['mi tarea', 'mi teléfono', 'el coche'];
  let when = ['antes de clase', 'cuando dormía', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras rezaba'];

  const randomExcuse = (arr) =>{
    return Math.floor(Math.random() * arr.length);
  }
  const findValue = arr => arr[randomExcuse(arr)];
  const excuse = (quien, accion, que, cuando) => `${findValue(quien)} ${findValue(accion)} ${findValue(que)} ${findValue(cuando)}`;
  console.log(excuse(who, action, what, when)); 
  let aquiVaLaExcusa = document.getElementById("FrasesExcusasFinal");
  aquiVaLaExcusa.innerHTML = excuse(who, action, what, when);
}

