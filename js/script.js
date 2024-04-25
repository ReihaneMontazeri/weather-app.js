let citiesDatas = {
    shiraz : {city:'shiraz',humidity: 30, temperature: 20, desciption: 'windy', WindSpeed : 6.2},
    tehran : {city:'tehran',humidity: 50, temperature: 20, desciption: 'windy', WindSpeed : 3.5},
    esfahan : {city:'esfahan',humidity: 20, temperature: 20, desciption: 'windy', WindSpeed : 4.2},
    mashhad : {city:'mashhad',humidity: 10, temperature: 20, desciption: 'windy', WindSpeed : 2.1}
}
let search = document.querySelector('.search-bar')
let city = document.querySelector('.city')
let temp = document.querySelector('.temp')
let humidity = document.querySelector('.humidity')
let wind = document.querySelector('.wind')
let btn = document.querySelector('.btn')
let loading = document.querySelector('.loading')
let description = document.querySelector('.description')

btn.addEventListener('click', function(){
    let searchValue = search.value
    mainCityInfo = citiesDatas[searchValue]
    console.log(mainCityInfo)
    if(mainCityInfo){
        document.querySelector('.weather').classList.remove('loading')
        city.innerHTML = mainCityInfo.city
        temp.innerHTML = mainCityInfo.temperature + '°C'
        humidity.innerHTML = 'Humidity: '+ mainCityInfo.humidity + '%'
        wind.innerHTML ='wind speed: '+ mainCityInfo.WindSpeed + ' km/h'
        description.innerHTML = mainCityInfo.desciption
    }else{
        console.log('undefined')
        loading.style.content = 'no information available'
    }
})