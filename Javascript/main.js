function setDateAndTime(){
    //getting date and formatting it
    date=new Date();
    year=date.getFullYear();
    month=date.getMonth();//returns index of month. Jan is index 0
    day=date.getDay(); //returns index of day. sun is -index 0
    todaydate=date.getDate();
    period="";//Am or Pm
    
    rawhours=date.getHours();
    if(rawhours>12){
     hour=rawhours-12;
     period="PM";
    }else if(rawhours==12)
    {
        hour=rawhours;
        period="PM";
    } else if(rawhours<12){
       
            hour=rawhours;   
       period="AM";

    }
    
    minutes=date.getMinutes();
    if(minutes<10){
        minutes="0"+minutes;
    }
    seconds=date.getSeconds();
    if(seconds<10){
        seconds="0"+seconds;
    }
    
    var months=["January", "February","March","April","May","June","July","August","September","October","November","December"];
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    document.getElementById("dayOftheweek").innerHTML=days[day]+",";
    document.getElementById("date").innerHTML=todaydate;
    document.getElementById("month").innerHTML=months[month];
    document.getElementById("year").innerHTML=year;

    document.getElementById("hour").innerHTML=hour+": ";
    document.getElementById("minutes").innerHTML=minutes+": ";
    document.getElementById("seconds").innerHTML=seconds;
    document.getElementById("period").innerHTML=period;
}
function realtimeclockDateUpdate(){
setDateAndTime();

//setting Interval handler-- TimerHandler with timeout of 1 to auto update time periodically
window.setInterval("setDateAndTime()",1);
}



function getUserInput(){

    var latitude,longitude;
    latitude=document.getElementById("latitude").value;
    longitude=document.getElementById("longitude").value;

    if(isNaN(latitude)||isNaN(longitude)){
        //input vaidation
        alert("CHECK YOUR LATITUDE & LONGITUDE INPUTS. CORDINATES MUST BE NUMBERIC (e.g 1.23 or 21)!!");
    }else{

//    alert(latitude);
//    alert(longitude);

   var api=`https://api.open-meteo.com/v1/forecast?latitude=`+latitude+`&longitude=`+longitude+`&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m&current_weather=true`;

   //var apilinksample='https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m&current_weather=true';

  fetch(api).then((res)=>res.json()).then((data)=>{
    getWeatherdata(data)
    //console.log(data.current_weather.temperature)
    
  }).catch((error)=>console.log(error));
    }
}

function getWeatherdata(data){
//method gets weather data from API response
//parameter data is a json from Weather API

//top current weather summary
  var currentTemp=data.current_weather.temperature;
  var currentWind=data.current_weather.windspeed;

  document.getElementById("centigrade").innerHTML=currentTemp;
  document.getElementById("windSpeed").innerHTML=currentWind+" km/h";

//Hourly forcast starts here
document.getElementById("hrlytemp0").innerHTML=data.hourly.temperature_2m[5];
document.getElementById("hrlytemp1").innerHTML=data.hourly.temperature_2m[6];
document.getElementById("hrlytemp2").innerHTML=data.hourly.temperature_2m[7];
document.getElementById("hrlytemp3").innerHTML=data.hourly.temperature_2m[8];
document.getElementById("hrlytemp4").innerHTML=data.hourly.temperature_2m[9];
document.getElementById("hrlytemp5").innerHTML=data.hourly.temperature_2m[10];
document.getElementById("hrlytemp6").innerHTML=data.hourly.temperature_2m[11];
document.getElementById("hrlytemp7").innerHTML=data.hourly.temperature_2m[12];
document.getElementById("hrlytemp8").innerHTML=data.hourly.temperature_2m[13];
document.getElementById("hrlytemp9").innerHTML=data.hourly.temperature_2m[14];
document.getElementById("hrlytemp10").innerHTML=data.hourly.temperature_2m[15];
document.getElementById("hrlytemp11").innerHTML=data.hourly.temperature_2m[16];
document.getElementById("hrlytemp12").innerHTML=data.hourly.temperature_2m[17];





/*
data paths 
    data.hourly.temperature_2m ---->yields temperature array;
    data.hourly.cloudcover_mid ---->cloudcover array;
    data.hourly.relativehumidity_2m ----> yields humidity array;
    data.hourly.windspeed_120m ---->yields windspeed array;

*/
  
  
  //humidity
  document.getElementById("hrlyhumidity0").innerHTML=data.hourly.relativehumidity_2m[5]+"%";
  document.getElementById("hrlyhumidity1").innerHTML=data.hourly.relativehumidity_2m[6]+"%";
  document.getElementById("hrlyhumidity2").innerHTML=data.hourly.relativehumidity_2m[7]+"%";
  document.getElementById("hrlyhumidity3").innerHTML=data.hourly.relativehumidity_2m[8]+"%";
  document.getElementById("hrlyhumidity4").innerHTML=data.hourly.relativehumidity_2m[9]+"%";
  document.getElementById("hrlyhumidity5").innerHTML=data.hourly.relativehumidity_2m[10]+"%";
  document.getElementById("hrlyhumidity6").innerHTML=data.hourly.relativehumidity_2m[11]+"%";
  document.getElementById("hrlyhumidity7").innerHTML=data.hourly.relativehumidity_2m[12]+"%";
  document.getElementById("hrlyhumidity8").innerHTML=data.hourly.relativehumidity_2m[13]+"%";
  document.getElementById("hrlyhumidity9").innerHTML=data.hourly.relativehumidity_2m[14]+"%";
  document.getElementById("hrlyhumidity10").innerHTML=data.hourly.relativehumidity_2m[15]+"%";
  document.getElementById("hrlyhumidity11").innerHTML=data.hourly.relativehumidity_2m[16]+"%";
  document.getElementById("hrlyhumidity12").innerHTML=data.hourly.relativehumidity_2m[17]+"%";


//cloud cover
  document.getElementById("hrlycloudcover0").innerHTML=data.hourly.cloudcover_mid[5]+"%";
  document.getElementById("hrlycloudcover1").innerHTML=data.hourly.cloudcover_mid[6]+"%";
  document.getElementById("hrlycloudcover2").innerHTML=data.hourly.cloudcover_mid[7]+"%";
  document.getElementById("hrlycloudcover3").innerHTML=data.hourly.cloudcover_mid[8]+"%";
  document.getElementById("hrlycloudcover4").innerHTML=data.hourly.cloudcover_mid[9]+"%";
  document.getElementById("hrlycloudcover5").innerHTML=data.hourly.cloudcover_mid[10]+"%";
  document.getElementById("hrlycloudcover6").innerHTML=data.hourly.cloudcover_mid[11]+"%";
  document.getElementById("hrlycloudcover7").innerHTML=data.hourly.cloudcover_mid[12]+"%";
  document.getElementById("hrlycloudcover8").innerHTML=data.hourly.cloudcover_mid[13]+"%";
  document.getElementById("hrlycloudcover9").innerHTML=data.hourly.cloudcover_mid[14]+"%";
  document.getElementById("hrlycloudcover10").innerHTML=data.hourly.cloudcover_mid[15]+"%";
  document.getElementById("hrlycloudcover11").innerHTML=data.hourly.cloudcover_mid[16]+"%";
  document.getElementById("hrlycloudcover12").innerHTML=data.hourly.cloudcover_mid[17]+"%";
  //windspeed
  document.getElementById("hrlywindspeed0").innerHTML=data.hourly.windspeed_120m[5]+" km/h";
  document.getElementById("hrlywindspeed1").innerHTML=data.hourly.windspeed_120m[6]+" km/h";
  document.getElementById("hrlywindspeed2").innerHTML=data.hourly.windspeed_120m[7]+" km/h";
  document.getElementById("hrlywindspeed3").innerHTML=data.hourly.windspeed_120m[8]+" km/h";
  document.getElementById("hrlywindspeed4").innerHTML=data.hourly.windspeed_120m[9]+" km/h";
  document.getElementById("hrlywindspeed5").innerHTML=data.hourly.windspeed_120m[10]+" km/h";
  document.getElementById("hrlywindspeed6").innerHTML=data.hourly.windspeed_120m[11]+" km/h";
  document.getElementById("hrlywindspeed7").innerHTML=data.hourly.windspeed_120m[12]+" km/h";
  document.getElementById("hrlywindspeed8").innerHTML=data.hourly.windspeed_120m[13]+" km/h";
  document.getElementById("hrlywindspeed9").innerHTML=data.hourly.windspeed_120m[14]+" km/h";
  document.getElementById("hrlywindspeed10").innerHTML=data.hourly.windspeed_120m[15]+" km/h";
  document.getElementById("hrlywindspeed11").innerHTML=data.hourly.windspeed_120m[16]+" km/h";
  document.getElementById("hrlywindspeed12").innerHTML=data.hourly.windspeed_120m[17]+" km/h";



 
//cloud cover row 0 - 6am

if(data.hourly.cloudcover_mid[5]>75){

    //set rainy image icon 
        const img=document.getElementById("cloudcoverimg0");
        img.src="Images/rainy.jpg";

} else if(data.hourly.cloudcover_mid[5]>50 && data.hourly.cloudcover_mid[5]<=75){
    //set cloudy image icon
        const img=document.getElementById("cloudcoverimg0");
        img.src="Images/cloudy.png";
} else if(data.hourly.cloudcover_mid[5]>25 && data.hourly.cloudcover_mid[5]<=50){
        //set partly cloudy image
        const img=document.getElementById("cloudcoverimg0");
        img.src="Images/partlycloudy.png";

} else if(data.hourly.cloudcover_mid[5]<=25){
       //set sunny image icon
        const img=document.getElementById("cloudcoverimg0");
        img.src="Images/sunny.png";
}



// row 1 cloud cover 

if(data.hourly.cloudcover_mid[6]>75){

    //set rainy image icon 
        const img=document.getElementById("cloudcoverimg1");
        img.src="Images/rainy.jpg";

} else if(data.hourly.cloudcover_mid[6]>50 && data.hourly.cloudcover_mid[6]<=75){
    //set cloudy image icon
        const img=document.getElementById("cloudcoverimg1");
        img.src="Images/cloudy.png";
} else if(data.hourly.cloudcover_mid[6]>25 && data.hourly.cloudcover_mid[6]<=50){
        //set partly cloudy image
        const img=document.getElementById("cloudcoverimg1");
        img.src="Images/partlycloudy.png";

} else if(data.hourly.cloudcover_mid[6]<=25){
       //set sunny image icon
        const img=document.getElementById("cloudcoverimg1");
        img.src="Images/sunny.png";
}

//2


if(data.hourly.cloudcover_mid[7]>75){

    //set rainy image icon 
        const img=document.getElementById("cloudcoverimg2");
        img.src="Images/rainy.jpg";

} else if(data.hourly.cloudcover_mid[7]>50 && data.hourly.cloudcover_mid[7]<=75){
    //set cloudy image icon
        const img=document.getElementById("cloudcoverimg2");
        img.src="Images/cloudy.png";
} else if(data.hourly.cloudcover_mid[7]>25 && data.hourly.cloudcover_mid[7]<=50){
        //set partly cloudy image
        const img=document.getElementById("cloudcoverimg2");
        img.src="Images/partlycloudy.png";

} else if(data.hourly.cloudcover_mid[7]<=25){
       //set sunny image icon
        const img=document.getElementById("cloudcoverimg2");
        img.src="Images/sunny.png";
}

//3


if(data.hourly.cloudcover_mid[8]>75){

    //set rainy image icon 
        const img=document.getElementById("cloudcoverimg3");
        img.src="Images/rainy.jpg";

} else if(data.hourly.cloudcover_mid[8]>50 && data.hourly.cloudcover_mid[8]<=75){
    //set cloudy image icon
        const img=document.getElementById("cloudcoverimg3");
        img.src="Images/cloudy.png";
} else if(data.hourly.cloudcover_mid[8]>25 && data.hourly.cloudcover_mid[8]<=50){
        //set partly cloudy image
        const img=document.getElementById("cloudcoverimg3");
        img.src="Images/partlycloudy.png";

} else if(data.hourly.cloudcover_mid[8]<=25){
       //set sunny image icon
        const img=document.getElementById("cloudcoverimg3");
        img.src="Images/sunny.png";
}

//4


if(data.hourly.cloudcover_mid[9]>75){

    //set rainy image icon 
        const img=document.getElementById("cloudcoverimg4");
        img.src="Images/rainy.jpg";

} else if(data.hourly.cloudcover_mid[9]>50 && data.hourly.cloudcover_mid[9]<=75){
    //set cloudy image icon
        const img=document.getElementById("cloudcoverimg4");
        img.src="Images/cloudy.png";
} else if(data.hourly.cloudcover_mid[9]>25 && data.hourly.cloudcover_mid[9]<=50){
        //set partly cloudy image
        const img=document.getElementById("cloudcoverimg4");
        img.src="Images/partlycloudy.png";

} else if(data.hourly.cloudcover_mid[9]<=25){
       //set sunny image icon
        const img=document.getElementById("cloudcoverimg4");
        img.src="Images/sunny.png";
}

//5

if(data.hourly.cloudcover_mid[10]>75){

    //set rainy image icon 
        const img=document.getElementById("cloudcoverimg5");
        img.src="Images/rainy.jpg";

} else if(data.hourly.cloudcover_mid[10]>50 && data.hourly.cloudcover_mid[10]<=75){
    //set cloudy image icon
        const img=document.getElementById("cloudcoverimg5");
        img.src="Images/cloudy.png";
} else if(data.hourly.cloudcover_mid[10]>25 && data.hourly.cloudcover_mid[10]<=50){
        //set partly cloudy image
        const img=document.getElementById("cloudcoverimg5");
        img.src="Images/partlycloudy.png";

} else if(data.hourly.cloudcover_mid[10]<=25){
       //set sunny image icon
        const img=document.getElementById("cloudcoverimg5");
        img.src="Images/sunny.png";
}


//6

if(data.hourly.cloudcover_mid[11]>75){

    //set rainy image icon 
        const img=document.getElementById("cloudcoverimg6");
        img.src="Images/rainy.jpg";

} else if(data.hourly.cloudcover_mid[11]>50 && data.hourly.cloudcover_mid[11]<=75){
    //set cloudy image icon
        const img=document.getElementById("cloudcoverimg6");
        img.src="Images/cloudy.png";
} else if(data.hourly.cloudcover_mid[11]>25 && data.hourly.cloudcover_mid[11]<=50){
        //set partly cloudy image
        const img=document.getElementById("cloudcoverimg6");
        img.src="Images/partlycloudy.png";

} else if(data.hourly.cloudcover_mid[11]<=25){
       //set sunny image icon
        const img=document.getElementById("cloudcoverimg6");
        img.src="Images/sunny.png";
}


//7
if(data.hourly.cloudcover_mid[12]>75){

    //set rainy image icon 
        const img=document.getElementById("cloudcoverimg7");
        img.src="Images/rainy.jpg";

} else if(data.hourly.cloudcover_mid[12]>50 && data.hourly.cloudcover_mid[12]<=75){
    //set cloudy image icon
        const img=document.getElementById("cloudcoverimg7");
        img.src="Images/cloudy.png";
} else if(data.hourly.cloudcover_mid[12]>25 && data.hourly.cloudcover_mid[12]<=50){
        //set partly cloudy image
        const img=document.getElementById("cloudcoverimg7");
        img.src="Images/partlycloudy.png";

} else if(data.hourly.cloudcover_mid[12]<=25){
       //set sunny image icon
        const img=document.getElementById("cloudcoverimg7");
        img.src="Images/sunny.png";
}





//8


if(data.hourly.cloudcover_mid[13]>75){

    //set rainy image icon 
        const img=document.getElementById("cloudcoverimg8");
        img.src="Images/rainy.jpg";

} else if(data.hourly.cloudcover_mid[13]>50 && data.hourly.cloudcover_mid[13]<=75){
    //set cloudy image icon
        const img=document.getElementById("cloudcoverimg8");
        img.src="Images/cloudy.png";
} else if(data.hourly.cloudcover_mid[13]>25 && data.hourly.cloudcover_mid[13]<=50){
        //set partly cloudy image
        const img=document.getElementById("cloudcoverimg8");
        img.src="Images/partlycloudy.png";

} else if(data.hourly.cloudcover_mid[13]<=25){
       //set sunny image icon
        const img=document.getElementById("cloudcoverimg8");
        img.src="Images/sunny.png";
}

//9

if(data.hourly.cloudcover_mid[14]>75){

    //set rainy image icon 
        const img=document.getElementById("cloudcoverimg9");
        img.src="Images/rainy.jpg";

} else if(data.hourly.cloudcover_mid[14]>50 && data.hourly.cloudcover_mid[14]<=75){
    //set cloudy image icon
        const img=document.getElementById("cloudcoverimg9");
        img.src="Images/cloudy.png";
} else if(data.hourly.cloudcover_mid[14]>25 && data.hourly.cloudcover_mid[14]<=50){
        //set partly cloudy image
        const img=document.getElementById("cloudcoverimg9");
        img.src="Images/partlycloudy.png";

} else if(data.hourly.cloudcover_mid[14]<=25){
       //set sunny image icon
        const img=document.getElementById("cloudcoverimg9");
        img.src="Images/sunny.png";
}

//10

if(data.hourly.cloudcover_mid[15]>75){

    //set rainy image icon 
        const img=document.getElementById("cloudcoverimg10");
        img.src="Images/rainy.jpg";

} else if(data.hourly.cloudcover_mid[15]>50 && data.hourly.cloudcover_mid[15]<=75){
    //set cloudy image icon
        const img=document.getElementById("cloudcoverimg10");
        img.src="Images/cloudy.png";
} else if(data.hourly.cloudcover_mid[15]>25 && data.hourly.cloudcover_mid[15]<=50){
        //set partly cloudy image
        const img=document.getElementById("cloudcoverimg10");
        img.src="Images/partlycloudy.png";

} else if(data.hourly.cloudcover_mid[15]<=25){
       //set sunny image icon
        const img=document.getElementById("cloudcoverimg10");
        img.src="Images/sunny.png";
}

//11


if(data.hourly.cloudcover_mid[16]>75){

    //set rainy image icon 
        const img=document.getElementById("cloudcoverimg11");
        img.src="Images/rainy.jpg";

} else if(data.hourly.cloudcover_mid[16]>50 && data.hourly.cloudcover_mid[16]<=75){
    //set cloudy image icon
        const img=document.getElementById("cloudcoverimg11");
        img.src="Images/cloudy.png";
} else if(data.hourly.cloudcover_mid[16]>25 && data.hourly.cloudcover_mid[16]<=50){
        //set partly cloudy image
        const img=document.getElementById("cloudcoverimg11");
        img.src="Images/partlycloudy.png";

} else if(data.hourly.cloudcover_mid[16]<=25){
       //set sunny image icon
        const img=document.getElementById("cloudcoverimg11");
        img.src="Images/sunny.png";
}

//12


if(data.hourly.cloudcover_mid[17]>75){

    //set rainy image icon 
        const img=document.getElementById("cloudcoverimg12");
        img.src="Images/rainy.jpg";

} else if(data.hourly.cloudcover_mid[17]>50 && data.hourly.cloudcover_mid[17]<=75){
    //set cloudy image icon
        const img=document.getElementById("cloudcoverimg12");
        img.src="Images/cloudy.png";
} else if(data.hourly.cloudcover_mid[17]>25 && data.hourly.cloudcover_mid[17]<=50){
        //set partly cloudy image
        const img=document.getElementById("cloudcoverimg12");
        img.src="Images/partlycloudy.png";

} else if(data.hourly.cloudcover_mid[17]<=25){
       //set sunny image icon
        const img=document.getElementById("cloudcoverimg12");
        img.src="Images/sunny.png";
}


alert("Weather Forecast Updated successfully. PRESS OK to CLOSE THIS alert");
//scroll to summary section
document.getElementById("currentWeatherSection").scrollIntoView();

}

