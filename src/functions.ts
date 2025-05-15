export const functions =()=>{
    
    // function functionName(arg1:type,arg2:type):type{
        //function body

        // return value;
    // }

    // function sayHello():void{
    //     console.log("Hello Welcome typescript function session");
    // }

    // sayHello();

    //Named function
    // function greet(name:string):string{
    //     return "Hello "+name;
    // }

    // console.log(greet("Denis"))


    //function expresion
    // const greet = function(name:string):string{
    //     return "Hello "+name;
    // }

    // console.log(greet("Denis"))


    //Arrow function
    // const addNumber = (num1:number,num2:number):number => {
    //     return num1+num2;
    // };
    
    // console.log(addNumber(10,20));
    // console.log(addNumber(100,200));



    // function multiply(a:number,b:number =2):number{
    //     return a*b;
    // }

    // console.log(multiply(5,50));

    //rest parameter

    // function sum(...numbers:number[]):number{
    //     return numbers.reduce((acc,number)=>acc+number,0)
    // }

    // console.log(sum(1,2,3,4,5,6,7,8,9,10));



    //callback function
    // function procecsUserInput(name:string,callback:(message:string)=>void){
    //     let greeting = `Hello ${name}!`;

    //     callback(greeting)
    // }


    // procecsUserInput("John",(message)=>console.log(message));



    function fetchData(callback:(data:string)=>void){
        console.log("Fetching data from server...");


        setTimeout(()=>{
            callback("Data fetched successfully");
        },5000)


    }


    fetchData((data)=>console.log(data));



    
}