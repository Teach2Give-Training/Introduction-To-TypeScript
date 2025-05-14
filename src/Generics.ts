export const Generics = () => {
    console.log("-----Generics------")

    //  function getFirstElement(array:(string | number)[]){
    //      return array[0];
    //  }

    //  const numbers = [100,200,300,400,500];
    //  const firstElement = getFirstElement(numbers);

    //  const strings = ["Hello","World"];
    //  const fistString = getFirstElement(strings);

    //  function getFirstElement<T>(array: T[]):T {
    //     return array[0];
    // }

    //  const numbers = [100,200,300,400,500];
    //  const firstElement = getFirstElement(numbers);

    //  const strings = ["Hello","World"];
    //  const fistString = getFirstElement(strings);

    //  const boleans = [true,false,true];
    //     const firstBoolean = getFirstElement(boleans);

    //example 2
    function getIndexOfArray<indexOftheElement>(array:indexOftheElement[], item: indexOftheElement) {
        return array.findIndex((element) => element === item);
    }

    const numbers = [100, 200, 300, 400, 500];
    const index = getIndexOfArray<number>(numbers, 300);

    const strings = ["Hello", "World"];
    const indexString = getIndexOfArray<string>(strings, "World");

    // exmple3

    // function createPair<T,U>(fistElement:T,secodElement:U):[T,U]{
    //     return [fistElement,secodElement];
    // }

    // const pair = createPair(10,20);
    // const pair1 = createPair("Hello","World");
    // const pair2 = createPair(10,"World");
    // const pair3 = createPair("World",10);

    // interface Box<T>{
    //     value:T;
    // }

    // const numberBox:Box<number> = {value:10};
    // const stringBox:Box<string> = {value:"Hello"};

    // console.log(numberBox.value); // Output: 10
    // console.log(stringBox.value); // Output: Hello

    interface ApiResponse<T>{
        success:boolean;
        data:T;
        error?:string;
    }


    //example usage
    const userResponse:ApiResponse<{name:string,age:number}> = {
        success:true,
        data:{
            name:"John",
            age:25
        }
    }

    const errorResponse:ApiResponse<null> = {
        success:false,
        data:null,
        error:"Not Found"
    }

    console.log(userResponse.data.name); // ✅ Type-safe access
    console.log(errorResponse.error); // ✅ Error message handling


}