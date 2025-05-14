export const asyncProgramming = () => {
    console.log("------Async Programming-------")

    //promises function
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
    //     .finally(()=>{
    //         console.log("Promise was settled")
    //     })

    //chaining Promises

    // function fetchUser(id: number): Promise<string> {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (id === 1) {
    //                 resolve("Denis Wachira")
    //             }else{
    //                 reject("User not found")
    //             }
    //         },2000)
    //     })
    // }

    // fetchUser(2).then(user=>{
    //     console.log(`User's name is ${user}`)
    //     return `User data: ${user}, age:30`;
    // })
    // .then(userData=>{
    //     console.log(userData)
    // })
    // .catch(error=>{        
    //     console.log( error)
    // })


    // async and await function

    // async function fetchData():Promise<string>{
    //     return "data fetched"
    // }

    // console.log(fetchData())

    //await key word


    async function fetchUser(id: number): Promise<string> {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (id === 1) {
                        resolve("Denis Wachira")
                    }else{
                        reject("User not found")
                    }
                },2000)
            })
        }

        async function getUserData(id:number):Promise<void>{
            try {
               const user = await  fetchUser(id);
               console.log(`User's name is ${user}`)
            } catch (error) {
               console.error(error) 
            }
        }

    //     getUserData(5)


    async function fetchUserData(): Promise<string[]> {
        // ... Fetch user data ...
    }

    async function fetchPostsData(): Promise<string[]> {
        // ... Fetch posts data ...
    }

    async function fetchData(): Promise<void> {
        try {
            const [users, posts] = await Promise.all([fetchUserData(), fetchPostsData()]);

            console.log(users);
            console.log(posts);
        } catch (error) {
            console.error(error);
        }
    }

    fetchData();


}