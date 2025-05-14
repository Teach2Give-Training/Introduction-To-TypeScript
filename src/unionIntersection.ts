export const unionIntersection = () => {

    //union and intersection

    let value: string | number;

    value = "Hello" //valid
    value = 10 //valid

    // value = true //invalid


    //intersection and type alias
    type User ={username:string; email:string}
    type Admin ={permissions:string[]}

    type SuperUser = User & Admin;


    let adminUser:SuperUser={
        username:"denis",
        email:"denis@gmail.com",
        permissions:["create","update","delete"]
    }

    console.log(adminUser)

    interface Product{
        id:number;
        name:string;
        price:number;
        stock:number;
    }

    // const product:Product ={
    //     id:1,
    //     name:"Laptop",
    //     price:20000,
    //     stock:10
    // }

    const product:Product[]= [
      {
        id:1,
        name:"Laptop",
        price:20000,
        stock:10
      },
      {
        id:2,
        name:"Mobile",
        price:10000,
        stock:20
      },
      {
        id:3,
        name:"Tablet",
        price:5000,
        stock:5
      }  
    ]

    console.log(product)

    //---Enums---//
    enum PaymentMethod{
        CreditCard ="credit_card",
        PayPal="paypal",
        MPesa="mpesa",
    }

    let PaymentMethodSelected:PaymentMethod = PaymentMethod.MPesa;
    console.log(PaymentMethodSelected)


    type Status = "success" | "error" | "pending";
    let requestStatus:Status = "success";


    enum HttpStatus{
        OK = 200,
        NotFound =404,
        InternalServerError = 500
    }


    function handleRequest(status:HttpStatus){
        if(status === HttpStatus.OK){
            console.log("Success")
        }else if(status === HttpStatus.NotFound){
            console.log("Not Found")
        }else if(status === HttpStatus.InternalServerError){
            console.log("Internal Server Error")
        }
    }


    // handleRequest(HttpStatus.OK)
    handleRequest(HttpStatus.NotFound)
    // handleRequest(HttpStatus.InternalServerError)   
    
    

    interface Animal{
        name:string
    }

    interface Dog extends Animal{
        back():void
    }


    let MyDog:Dog ={
        name:"Bingo",
        back:()=>{
            console.log("Barking")
        }
    }

    console.log(MyDog.name)
    MyDog.back()



};