/*
// Task 1 
let number =parseInt(prompt("Enter the number :")) ;
if (number%2==0) {
    console.log("the number of even")
} else{
    console.log("the number is odd")
}
*/
/*
// Task 2 
const pi = 3.14 
let r = parseInt(prompt("Enter the Radius Circle :") );
circleArea = pi * r*r ;
console.log(circleArea);
circumference = 2 * pi * r ;
console.log(circumference)
*/
/*
let r = parseInt(prompt("Enter the Radius Circle :") );
circleArea = Math.PI * r*r ;
console.log(circleArea);
circumference = 2 * Math.PI * r ;
console.log(circumference);
*/
//splice 

/*
// Task 3
let num1 =parseFloat(prompt("Enter the number 1 : "))
let num2 =parseFloat(prompt("Enter the number  2 : "))
console.log (`the sum is two number is : ${num1+num2}\n the muliply is two number is :${num1*num2}   \n the substract the two number is :${num1-num2}`)

if(!num2==0){
console.log (`  the devision the two number is :${num1/num2} }`)

}else {
    console.log("not devision by zero ")
}
*/

/*
// Task  4 
let num1 =parseInt(prompt("Enter the number 1 : "))
let num2 =parseInt(prompt("Enter the number  2 : "))

if(num1 > 0 && num2  < 0  || num1 <0 && num2 > 0 ){
    console.log("one intager is positive and another is nagtive .")

}else if((num1 > 0 && num2  > 0   )){
    console.log("Both intagers are positive " )
}else if(num1 < 0 && num2 < 0){
    console.log("Both intagers are nagtive " )
}
*/  

/* task 5 
let name = ["awad" , "alaa" , "Eslam"] 
//delete 

 name.splice(1,1)
console.log(name)

*/ 

/*

const btn = document.getElementsByClassName('dark-mode'); 
const  btn2= document.getElementsByClassName('light-mode');
const body=document.querySelector("body");

function changeToDarkStyle(){
    body.style.background ='#2f2f2f' ;
    body.style.color ='white'
}
function changeTolightStyle(){
     body.style.background ='#fff' ;
    body.style.color ='black'
}
*/


const inputColor1 = document.getElementById("color1");
const inputColor2 = document.getElementById("color2");
const body = document.querySelector("body") ;

function changeStyle(){
    body.style.background=`linear-gradient(to right ,${inputColor1.value},${inputColor2.value})` ;

}

inputColor1.addEventListener("input" , changeStyle);
inputColor2.addEventListener("input" , changeStyle);

//  for advanced 
/*
let i =1 ;
for (; i<=5 ; ){
    console.log(i);
    i++;
}
console.log(i)
*/ 

// array 
/*
let name= ['ali' ,'amr' ,'awad'];
//name.unshift("manal");
//name.push("soma");
//name.pop()
//name.shift() ;
//name.splice(1,1);
name.splice(1,0,"manal","soma")
console.log(name);
*/


