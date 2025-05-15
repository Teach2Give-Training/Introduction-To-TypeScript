export const asyncProgramming = () => {
    console.log("------Async Programming-------")

       // const myPromise = new Promise<string>((resolve, reject) => {
    //     // Asynchronous operation
    //   });

    
    //   myPromise
    //     .then(value =>{
    //         console.log(value)
    //     })
    //     .catch(reason=>{
    //         console.log(reason)
    //     })

    // const MyPromise = new Promise<string>((resolve,reject)=>{
    //     setTimeout(()=>{
    //         reject("Network error")
    //     })
    // })

    // MyPromise.then(value=>{
    //     console.log(value)
    // })
    // .catch(reason =>{
    //     console.error(reason)
    // })


    //async and await

    // async function fetchData():Promise<string>{
    //     return "Data Fetched"
    // }

    // console.log(fetchData())


    // async function fetchUser(id:number):Promise<string> {

    //     return new Promise((resolve, reject)=>{
    //         setTimeout(()=>{
    //            if(id === 1){
    //             resolve("Denis Wachira")
    //            } else{
    //             reject("User not found")
    //            }
    //         },3000)
    //     })
        
    // }

    // async function getUserData(id:number):Promise<void> {
    //     try {
    //        const user = await fetchUser(id);
    //        console.log(user)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // getUserData(3)


    const fetchAPI = async(id:number):Promise<void> =>{
        try {
            const url = `https://jsonplaceholder.typicode.com/users/${id}`
            const response = await fetch(url)

            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    fetchAPI(1)

}