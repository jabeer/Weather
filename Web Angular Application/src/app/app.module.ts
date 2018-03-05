import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { WeatherService } from './service/weather.service';
import { FutureForecastComponent } from './component/future-forecast/future-forecast.component';
import { TodayForecastComponent } from './component/today-forecast/today-forecast.component';
import { HeaderComponent } from './component/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FutureForecastComponent,
    TodayForecastComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DatePipe,WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

