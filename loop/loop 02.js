// let userName="java";
// let password="asd123";

// if (userName=="java"){
//     console.log("welcome" + userName);
// }

// else{
//     console.log("password is not incorrect");

// }





// // Grade point 
// let marks=105;

// if(marks<0){
//     console.log("Invalid Number");

// }

// else if(marks<=32){
//     console.log("F");

// }

// else if(marks<=39){
//     console.log("D");

// }

// else if(marks<=49){
//     console.log("C");

// }

// else if(marks<=59){
//     console.log("B");

// }

// else if(marks<=69){
//     console.log("A-");

// }

// else if(marks<=79){
//     console.log("A");

// }

// else if(marks<=100){
//     console.log("A+");

// }

// else{
//     console.log("Invalid Number");
// }





// // prime number

// let number=2;
// let counter=0;

// for(let i=1; i<=number; i++){
    
//     if(number%i==0){
//         counter=counter+1;
//     }    
    
//     } 

// if(counter==2){
//     console.log("prime number");
// }    
    
//     else{
//         console.log ("not found");
//     }
    




// swap or swaping

// let x=10;
// let y=20;
// let temp=0;

// temp=x;
// x=y;
// y=temp;

// console.log("x=" +x+ " y="+y)





// Fibonnacci - 0 1 1 2 3 5 8 13

let n1=0;
let n2=1;
let sum=0;
console.log(n1+" \n" +n2);

for (let i=3; i<=8; i++){
    sum=n1+n2;
    console.log(sum);
    n1=n2;
    n2=sum;
}



