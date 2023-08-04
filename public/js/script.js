
let form = document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    // console.log(document.getElementById('address').value)
    // setTimeout( weatherFunction(), 5000);
    weatherFunction()
    form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const longitudeF =document.getElementById('longitude')
const latitudeF =document.getElementById('latitude')
const forecastF = document.getElementById('forecast')

// async --> function return promise
let weatherFunction = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = data.error
            locationF.innerText =""
            longitudeF.innerText =""
            latitudeF.innerText = ""
            forecastF.innerText =""

        }
        else {
            locationF.innerText = data.location

            setTimeout(longitudeF.innerText = data.longitude, 500);
            // longitudeF.innerText = data.longitude
            setTimeout(latitudeF.innerText = data.latitude, 500);

            // latitudeF.innerText = data.latitude
            setTimeout(forecastF.innerText = data.forecast, 500);

            // forecastF.innerText = data.forecast
            errorF.innerText =""
            // console.log(data)
        }
    }
    catch(e){
        console.log(e)
    }
}

// 3 