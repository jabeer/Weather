import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-future-forecast',
  templateUrl: './future-forecast.component.html',
  styleUrls: ['./future-forecast.component.css']
})
export class FutureForecastComponent implements OnInit {

	@Input() day : string;
	@Input() maxTemperature : string;
	@Input() minTemperature : string;
	@Input() description : string;
	@Input() image : string;

	public days :string;

  constructor() { }

  ngOnInit() {
  	this.days = this.setDay();
  }

  setDay(){
      let weekDay = new Date(this.day);
      let weekDays : string;
      switch(weekDay.getDay()) { 
       case 1: { 
          weekDays = "MON"; 
          break; 
        } 
        case 2: { 
          weekDays = "TUE";
          break; 
        }
          case 3: { 
        weekDays = "WED"; 
        break; 
          } 
        case 4: { 
          weekDays = "THU";
        break; 
          }
          case 5: { 
          weekDays = "FRI"; 
          break; 
          } 
        case 6: { 
          weekDays = "SAT";
          break; 
          } 
        default: { 
      weekDays = "SUN"; 
      break; 
   } 
}
  return weekDays;  
  }

}
