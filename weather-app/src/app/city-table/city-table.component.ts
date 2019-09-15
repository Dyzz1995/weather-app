import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Weather } from '../model/cityWeather.model';

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.scss']
})
export class CityTableComponent implements OnInit, OnChanges {

  rows = [];
  @Input() onChange;

  @Input() citiesWeather: Weather[];

  /* 
    @Input() set setRows(citiesWeather: Weather[]) {
  
      this.prepareRows();
  
    } */

  columns = [
    { name: 'cityName' },
    { name: 'text' },
    { name: 'actual' },
    { name: 'minimum' },
    { name: 'maximum' },
    { name: 'sunrise' },
    { name: 'sunset' }
  ];

  constructor() {
  }

  ngOnInit() {
    /*    this.onChange.subscribe(res=>{
         this.setRows();
      }); */

  }
  ngOnChanges() {
    this.onChange.subscribe(res => {

      this.setRows(this.citiesWeather.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      }));
    });
  }


  setRows(citiesWeather: Weather[]) {
    if (citiesWeather != null) {
      citiesWeather.map(weather => {
        this.rows.push({
          cityName: weather.cityName,
          text: weather.text,
          actual: weather.temperature.actual,
          minimum: weather.temperature.minimum + 'ºC',
          maximum: weather.temperature.maximum + 'ºC',
          sunrise: weather.sunLight.sunrise,
          sunset: weather.sunLight.sunset
        });
      });
    }
  }

}
