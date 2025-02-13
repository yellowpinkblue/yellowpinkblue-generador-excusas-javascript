import "bootstrap";
import "./style.css";




window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  let numRandomWho = Math.random() * who.length; 
  let IntRand1 = Math.floor(numRandomWho);
  let numRandomAction = Math.random() * action.length; 
  let IntRand2 = Math.floor(numRandomAction);
  let numRandomWhat = Math.random() * what.length; 
  let IntRand3 = Math.floor(numRandomWhat);
  let numRandomWhen = Math.random() * when.length; 
  let IntRand4 = Math.floor(numRandomWhen);
  
  let FrasesExcusasFinal = who[IntRand1] +' '+ action[IntRand2] + ' ' + what[IntRand3] + ' ' + when[IntRand4] + '.';
  document.getElementById('FrasesExcusasFinal').innerHTML = FrasesExcusasFinal;
  

  console.log(FrasesExcusasFinal);

  

};

