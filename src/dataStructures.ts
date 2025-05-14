export const dataStructures =()=>{
    
    //Array
    
    let roles:Array<string> = ["Admin","User","SuperAdmin"];
    
    let evenNumbers:number[] = [2,4,6,8,10]
    
    // console.log("--TypeScript Arrays--");
    
    // let hobbies:string[] = ["Sport","cooking","coding"]

    // console.log("Hobbies before pushing new hobby", hobbies);
    // hobbies.push("Reading")
    //  console.log("Hobbies after pushing new hobby", hobbies);


    //  let colors: string[] = ["Red", "Green", "Blue", "Yellow"];
    //  // Extracting from index 1 to 3 (not including 3)
    // let selectedColors = colors.slice(1, 3);
    // console.log(selectedColors)


     //TUPLES
     console.log("--TypeScript Tuples--");
     let myCar: [string, number] = ["Toyata", 2020]

    //  myCar = [2020,"Toyota"] //error
    console.log(`My Car: ${myCar[0]} and Year: ${myCar[1]}`)
   myCar[1] =2024
   console.log(`My Car: ${myCar[0]} and Year: ${myCar[1]}`)


//    let myCar2:readonly[string,number] =["Toyota",2020]
//    myCar2[1]=2025

 
        // 📌 3. Optional Elements in Tuples
        let employee: [string, number, string?] = ["John", 30];
        console.log(employee); // ["John", 30]

employee[2] = "manager"
console.log(employee)


        //objects
        console.log("--TypeScript Objects--");

        const person:{name:string,age:number,hobbies:string[],role:string[]} ={
            name:"Denis",
            age:25,
            hobbies:["Cooking","Swimming"],
            role: ["Student","Developer"]
        }

        let car:{brand:string,year:number,model:string}


        car ={
            brand: "Toyota",
            year:2024,
            model: "V8"
        }

        console.log(person.name)
        console.log(person["name"])

        person.name = "Brian"
        console.log(person.name)


        const user:{firstname:string,age:number,color?:string, address:{country:string, city:string}}={
            firstname:"Jonh",
            age:30,
            color:"dark", //optional property
            address:{
                country:"Kenya",
                city:"Nairobi"
            }
        }

        console.log(user.address.city)




}