import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService {

  constructor(private http : HttpClient) { }

    public getWeather() {

  return this.http.get("./assets/output.json")
                         .map(res => res);


  }

}
