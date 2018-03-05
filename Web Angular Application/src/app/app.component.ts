import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { WeatherService } from './service/weather.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [WeatherService,DatePipe]
})
export class AppComponent {
  constructor(private datepipe: DatePipe,private weatherService:WeatherService){ }

  public todayWeather : WeatherModel;
  public city : string;
  public country : string;
  public response ;
  public foreWeather :  WeatherModel[] = [];
  ngOnInit() { 
          let weathers : Map<string,any> = new Map<string,any>();
          this.weatherService.getWeather().subscribe(res =>
          {
              this.response =res;
              this.city = this.response.city.name;
              this.country = this.response.city.country;
              this.response.list.forEach(item => {
                let weatherDate = this.datepipe.transform(item.dt_txt,"MM/dd/yyyy");
                if(weathers.has(weatherDate)){
                    if(item.main.temp_max>weathers.get(weatherDate).main.temp_max){
                        weathers.get(weatherDate).main.temp_max = item.main.temp_max;
                    }
                  if(item.main.temp_min<weathers.get(weatherDate).main.temp_min){
                      weathers.get(weatherDate).main.temp_min =item.main.temp_min;
                    }            
                } else {        
                  weathers.set(weatherDate,item);
                }

              });
              Array.from(weathers).forEach((weather) => {
                  let today_Date = new Date("01/31/2017");
                  let item_date = new Date(weather[0]);
                  if(today_Date.getMonth() <= item_date.getMonth() &&today_Date.getDate() == item_date.getDate()){
                      this.todayWeather = this.setProperty(weather[1]);
                  } else {
                      this.foreWeather.push(this.setProperty(weather[1]));
                  }
              });

          });
  }

  

  setProperty(weatherDomain): WeatherModel{
      let tempDomain = new WeatherModel();
      if(weatherDomain){
        tempDomain.time = weatherDomain.dt_txt;
        if(weatherDomain.main){
          tempDomain.temperature = weatherDomain.main.temp;
          tempDomain.humidity = weatherDomain.main.humidity;
          tempDomain.pressure = weatherDomain.main.pressure;
          tempDomain.minTemperature = weatherDomain.main.temp_min;
          tempDomain.maxTemperature = weatherDomain.main.temp_max;
        }
        if(weatherDomain.wind){
          tempDomain.wind= weatherDomain.wind.speed;
        }
        if(weatherDomain.weather[0]){
          tempDomain.desc = weatherDomain.weather[0].main;
          tempDomain.image = this.setImage(tempDomain.desc);
        }  
      }
      return tempDomain;      
  }

  setImage(desc):string {
    let image :string;
    if(desc == "Clouds"){
      image = "assets/images/partlyCloudy.png"
    } else if (desc == "Clear") {
      image = "assets/images/sunny.png"
    } else if (desc == "Snow") {
      image = "assets/images/snow.png"
    } else if (desc == "Rainy") {
      image = "assets/images/currentWeather.png"
    }
    return image;

  }
}

class WeatherModel {
   temperature : string;
   desc:string;
   time:string;
   humidity:string;
   pressure:string;
   minTemperature:string;
   maxTemperature:string;
   wind:string;
   image: string;
   constructor() { }
}
