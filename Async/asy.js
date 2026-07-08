async function harry() {
    let delhiWeather = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("27 deg")
            
        },2000);
    })

    let bangloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 deg")
        }, 5000);
    })
    console.log("fetching delhi weather please wait...")
    let delhiW = await delhiWeather
    console.log("fetched delhi weather:" + delhiW)

     console.log("fetching banglore weather please wait...")
    let bangloreW = await bangloreWeather
    console.log("fetched banglore weather:" + bangloreW)
    return[delhiW,bangloreW]
}
let a = harry()
a.then((value) =>{
    console.log(value)
})