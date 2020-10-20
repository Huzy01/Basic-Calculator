function calculate(){
  var number1;
  // 1st number of the maths equation variable
  var number2;
  // 2nd number of the maths equation variable
  var result;
  // the answer for number1 + number2
  number1 = parseInt(document.getElementById("num1").value);
  /* assigning the number1 variable to the 1st input box
  the parse int makes the input convert into a number from a string*/
  number2 = parseInt(document.getElementById("num2").value);
  /* assigning the number2 variable to the 1st input box
  the parse int makes the input convert into a number from a string*/
  result = number1 + number2;
  //the result varibale is assigned to the value of the first input box and the second input box added together
  document.getElementById("answer").innerHTML = result;
}