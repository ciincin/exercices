const isLogged = true;

let firstPromise = new Promise ((resolve,reject)=>{
    if(isLogged){
        const randomNumber = Math.random()
        resolve(randomNumber.toFixed(1))
    }else {
        reject("error")
    }
})

const secondPromise = (number) => {
    return new Promise ((resolve, reject) => {
        if (number > 0.5){
            resolve({name: "John", age: 24})
        } else {
            reject("error");
        }
    })
} 
 
firstPromise
.then((response) => secondPromise(response))
// .then(secondPromise)
.then((response)=>console.log(response))
.catch((err)=> console.error(err))

// firstPromise.then((res)=> console.log(res))