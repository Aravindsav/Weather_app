import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({info}){
const INIT_URL = "https://images.unsplash.com/photo-1523556329929-93033da89632?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 
const HOT_URL = "https://thumbs.dreamstime.com/b/heat-wave-extreme-sun-sky-background-hot-weather-global-warming-concept-temperature-summer-season-summer-heat-wave-147982844.jpg";
const COLD_URL ="https://t4.ftcdn.net/jpg/08/40/66/35/360_F_840663512_B3dvws0l451DsEMMX1W72VSTA44TWwC3.jpg";
const RAIN_URL = "https://static.vecteezy.com/system/resources/previews/042/146/565/non_2x/ai-generated-beautiful-rain-day-view-photo.jpg";


    return(
        <div className="InfoBox">
            
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>15? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city} {info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p> The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}