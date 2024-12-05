import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';
export default function WeatherApp(){

    // const COLDBACKGROUND_IMG = "https://www.shutterstock.com/image-photo/winter-forest-south-park-sofia-600nw-2483073899.jpg";
    // const HOTBACKGROUND_IMG = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=612x612&w=0&k=20&c=wp60t_1SUG9qDTxzAJwvfZYlLVAiu9r737F_nvtOSPA=";
    // const RAINBACKGROUND_IMG = "https://img.freepik.com/free-photo/closeup-shot-wet-glass-reflecting-rainy-forest-scenery_181624-23365.jpg";
    const [weatherInfo,setWeatherInfo]= useState({
        city:"Visakhapatnam",
        feelsLike: 24.44,
        humidity: 83,
        temp: 23.83,
        tempMax: 23.83,
        tempMin: 23.83,
        weather: "overcast clouds"

    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    // const source  = weatherInfo.humidity>80?RAINBACKGROUND_IMG: weatherInfo.temp>15?HOTBACKGROUND_IMG:COLDBACKGROUND_IMG;

    return(
        
        <div style={{textAlign:"center"}}>
            

            <h2>Weather App By Aravind </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
            
        </div>
    )
}