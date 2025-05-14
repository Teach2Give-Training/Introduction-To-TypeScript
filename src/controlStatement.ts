export const controlStatement = () => {
    console.log("-----Control Statement------")

    //if statement
    // let myAge:number = 12;

    // if(myAge>=18){
    //     console.log("You are eligible to vote");
    // }

    //if else statement
    // let myAge1:number = 21;
    // if(myAge1>=18){
    //     console.log("You are eligible to vote");
    // }else{
    //     console.log("You are not eligible to vote");
    // }


    //if else if statement
    // let marks: number =2;
    // let grades: string;

    // if (marks >= 90 && marks <= 100) {
    //     grades = "A";
    // } else if (marks >= 80 && marks <= 89) {
    //     grades = "B";
    // } else if (marks >= 70 && marks <= 79) {
    //     grades = "C";
    // } else if (marks >= 60 && marks <= 69) {
    //     grades = "D";
    // } else if(marks >= 0 && marks <= 59){ 
    //     grades = "F";
    // }else{
    //     grades = "Invalid marks";
    // }

    // console.log(`Your grade is ${grades}`);


    //switch statement

    let day:string = "Tuesday";


    // switch(day){
    //     case "Monday":
    //         console.log("Start of the workweek");
    //         break;
    //     case "Friday":
    //         console.log("End of the workweek");
    //         break;
    //     case "Saturday":
    //     case "Sunday":
    //         console.log("Enjoy the weekend");
    //         break;
    //     default:
    //         console.log("Midweek days are so-so");            

    // }


    //switch with enum

    // enum Role{
    //     Admin = "Admin",
    //     Editor = "Editor",
    //     Viewer = "Viewer"
    // }

    // let userRole:string = Role.Viewer;

    // switch(userRole){
    //     case Role.Admin:
    //     console.log("Access: Full control 🛠️");
    //       break;
    //     case Role.Editor:
    //     console.log("Access: Moderate control 🧰")
    //       break;
    //     case Role.Viewer:   
    //     console.log("Access: Limited control 🔧")
    //       break;
    //     default:    
    //     console.log("Access: No control 🚫")
    // }
}