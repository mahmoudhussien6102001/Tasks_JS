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

// index of 

let string ="mahmoud hussien awad" ;
console.log(string.indexOf("mahmoud"))
// repeat 
let a= "#" ;
console.log(a.repeat(20)) ;
// ternary operator
let age = 20 
age>20 ? console.log("the age is greater than 20") : age<20 ?console.log("the age is less than 20") : console.log("the age equal 20") ;
console.log(a.repeat(30)) ;
// switch  

let day = 4 ;
switch(day) {
    case 0 :
        console.log("starday")  ;
        break ;
    case 1 :
        console.log("sunday") ;
        break ;
    case 2 :
        console.log("manday") ;
        break ;
     default:
        console.log("friday")   
}
console.log(a.repeat(30)) ;
if(day==0){
    console.log("starday")
}else if(day==1){
    console.log("sunday")
}else if(day== 2) {
    console.log("manday")
}else{
    console.log("friday") 
}

console.log(a.repeat(30)) ;

// method array 

let student = ["ali" ,"amr" ,"awad" ,"gada",10,20,-1] ;
// sort built in func
console.log(student.sort())

//reverse built func
// console.log(student.reverse())
let x = ["manal" ,"marwa","gada","rahma"];
//x.slice()      (1,2)  1 => means start   and 2 => means end is not nude 
console.log(x.slice(1,2)) // "marwa"

console.log(a.repeat(30)) ;
// opearion in array 
let salary = [10000 ,20000 ,30000 ,40000] ;
let addSalary = []
for(i=0 ; i<salary.length ; i++){
    addSalary.push(salary[i] *2 )
}
console.log(addSalary)
console.log(a.repeat(30)) ;

// while 

let g= 1 ;
while(g<=10) {
    console.log(g);
    g++
}

// do while 
console.log(a.repeat(30)) ;


let k = 1 ;
do{
    console.log(k);
    k++;
}while(k>=10); // not condon true   but output === 1 
console.log(a.repeat(30)) ;

//  1/ function 
function display (){
    return `Welcome the JavaScript`
}
console.log(display()) ; 

console.log(a.repeat(30)) ;


// 2/ function paramter 
function sum (num1 , num2){
    return `the sum is :${num1+num2}`
}
console.log(sum(10,20))

console.log(a.repeat(30)) ;

// 3/ function 
function sayHello (username ,age){
    if(age == undefined && username==undefined) {
        age ='unknown';
        username='user'
    }
    console.log(`the user  name is :${username} and the age is :${age}`)
}

sayHello("mahmoud" , 23);
sayHello("awad")
sayHello();
console.log(a.repeat(30)) ;

// 4 * rest parmeterss

function calc(...numbers) {
    let results = 0
    for (let i = 0 ; i <numbers.length ;i++) {
        results += numbers[i];
    }
    return `the final results is ${results}`
}

console.log(calc(10,20,30,40,50)) ;
console.log(a.repeat(30)) ;

 
// 5* anonymous func
let calculator = function(number1,number2){
    return `the multiply two number is : ${number1 * number2}`
}
console.log(calculator(10,20))
console.log(a.repeat(30)) ;



// 6* Arrow func  not word function and {} include => 
let calcu = (z,y)=>
    `the sub is two number is :${z-y}`
console.log(calcu(20,1))
console.log(a.repeat(30)) ;


// higher order function 
let my =[1,2,3,4,5] ;
let add = my.map(function(ele){
    return ele+ele;

})
console.log(add);
console.log(a.repeat(30)) ;



let s = [10 ,20 ,30 ,40] ; 
let m =s.map(ele=> ele*ele ) ;
console.log(m)

console.log(a.repeat(30)) ;



// higher function swap 

let swap ="ElawAD" ;
let sw =swap.split("").map(ele => ele===ele.toUpperCase()?ele.toLowerCase():ele.toUpperCase()).join("")
console.log(sw); //'elAWad'
console.log(a.repeat(30)) ;

//higher filter 

let numb = [11,20,2,5,17,10] ;

let filt = numb.filter(ele=> ele %2===0 ?true : false);
console.log(filt) ;
console.log(a.repeat(30)) ;


let friends = ["ahmed" ,"Amagd" ,"marwa" ,"arwa" ,"Gada"] ;
let friend = friends.filter (ele => ele.startsWith("a") || ele.startsWith("A")) ;

console.log(friend);
console.log(a.repeat(30)) ;


// higher reduce function 

let nnumbre =[10,20,30,15] // 75 

let redu = nnumbre.reduce((acc,current)=> acc+current);
console.log(redu)
