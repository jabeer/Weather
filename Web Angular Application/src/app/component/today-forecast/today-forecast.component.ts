import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-today-forecast',
  templateUrl: './today-forecast.component.html',
  styleUrls: ['./today-forecast.component.css']
})
export class TodayForecastComponent implements OnInit {

	@Input() description: string;
  @Input() humidity: string;
  @Input() temperature: string;
  @Input() time: string;
  @Input() pressure: string;
  @Input() minTemperature: string;
  @Input() maxTemperature: string;
  @Input() wind: string;
  @Input() image : string;

  constructor() { }

  ngOnInit() {
    
    
  }

}
