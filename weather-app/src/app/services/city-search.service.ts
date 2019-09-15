import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../model/cityWeather.model';

@Injectable({
  providedIn: 'root'
})
export class CitySearchService {
  baseUrl = "http://localhost:3000/get/forecast/cityName/";
  constructor(private httpClient: HttpClient) { }

  getForecast(city: string) {
    return this.httpClient.get(this.baseUrl + city);
  };



}
