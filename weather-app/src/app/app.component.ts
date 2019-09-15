import { Component } from '@angular/core';
import { CitySearchService } from './services/city-search.service';
import { Weather } from './model/cityWeather.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  count: number = 0;
  cities: string[] = [];
  citiesWeather: Weather[] = [];
  showTable: boolean;
  tempWeathers: Weather[] = [];
  brodCastChnage: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(public cityService: CitySearchService) {
  }

  getCities($event) {
    this.showTable = false;
    this.cities = $event;
    if (this.count != 0) {
      this.tempWeathers = [];
    }
    this.cities.map(city => {
      this.cityService.getForecast(city).subscribe((weather: Weather) => {
        

        this.tempWeathers.push(weather);
        if (this.tempWeathers.length == this.cities.length) {
          this.citiesWeather = this.tempWeathers;
          this.showTable = true;
          this.count++;
        }

      });


    });


  }




}
