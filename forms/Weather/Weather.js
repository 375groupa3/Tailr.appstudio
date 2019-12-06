
btnHome.onclick=function(){
  ChangeForm(home)
}

let arrayTemp= []
let arrayCloud = []
let arrayPrecip = []

btnWeather.onclick=function(){

let apiKey = "a333ce20dcf3428ba7c734bea38e957d"
let city = inptCity.value
let country = "US"
let myurl = "https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/current?city="+city +"&country="+country+"&units=I&key="+apiKey;

  $.ajax({
      url: myurl,
          headers: {
            'Authorization':'Bearer a333ce20dcf3428ba7c734bea38e957d'},
            method: 'GET',
            dataType: 'json',
            success: function(myData){   // this function runs with the returned data if trip is successful
                console.log(myData)
                arrayTemp.push(myData.data[0].app_temp)
                arrayPrecip.push(myData.data[0].precip)
                arrayCloud.push(myData.data[0].clouds)
                lblCurrentWeather.value = `Your current weather is:`
                
                Temp.value = `Temperature: ${arrayTemp[0]} Farenheit`
                Cloud.value = `Cloud Cover: ${arrayCloud[0]}%`
                Rain.value = `Precipitation: ${arrayPrecip[0]}%`
                
            } // close success funct
         });   // close ajax call
}

