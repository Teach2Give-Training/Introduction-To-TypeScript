export const variables = ()=>{
    let firstName:string = "Denis";
    let lastName:string = "Wachira"
    let age:number = 25


    // string interpolation
    console.log(`Hello I'm,${firstName} ${lastName} and I'm ${age} years old`);

    //string concantennation
    console.log("Hello I'm," +firstName + " " +lastName+ " i'm " +age+ "years old")


    //simple math
    let x:number =100
    let y:number = 50

    console.log("The addition is ", x+y);


    // let price:number = 200
    // let discount: number = 0.1 //10%
    // let finalPrice: number = price - (price*discount)

    // console.log("The final price is:", finalPrice);

    //boolean - Check condtions

    // let isStudent:boolean = false
    // let isLogged:boolean = false

    //using boolen to check condtions
    // if(isStudent){
    //         console.log("Welcome, student! Enjoy learning typescript")
    // }else{
    //     console.log("Welcome, guest! Enjoy learning typescript")
    // }

    //special type
    //any type

    let something:any ="Hello"

    console.log("The type something is :", typeof something);

    something = 100

    console.log("The type of something is: " , typeof something);

    something = true;
    console.log("The type of something is:", typeof something);

    //unknown type

    let userInput:unknown

    userInput = "Hello Typescript"
    // console.log("The type of userInput is:", typeof userInput);

    // userInput = 10; //this fine because the type is unknown allows any value
    // console.log("The type of userInput is:", typeof userInput);




    // let newVar:string = userInput

    if(typeof userInput === "string"){
        let newVar:string = userInput
        console.log("The type of newVar is:", typeof newVar);
    }

    //void

    // function sayHello():void{
    //     console.log("Hello Typescript")
        
    // }


    

    // sayHello()


    //never

    // function throwError(message:string):never{
    //     throw new Error(message)
    // }

    // throwError("something went wrong");

    function infiniteLoop():never{
        while(true){
            console.log("infinite loop")
        }
    }

    

}