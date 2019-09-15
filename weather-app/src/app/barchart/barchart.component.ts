import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Weather } from '../model/cityWeather.model';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit, OnChanges {
  
  @Input() citiesWeather: Weather[];
  cities: string[] = [];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public maximum: number[] = [];
  public minimum: number[] = [];
  public actual: number[] = [];

  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];

  constructor() {

  }

  ngOnInit() {
  }

  ngOnChanges(){
    
    this.barChartLabels = this.citiesWeather.map(weather => weather.cityName);
    this.maximum = this.citiesWeather.map(weather => weather.temperature.maximum);
    this.minimum = this.citiesWeather.map(weather => weather.temperature.minimum);
    this.actual = this.citiesWeather.map(weather => weather.temperature.actual);

    this.barChartData = [
      {data: this.maximum, label: 'maximum'},
      {data: this.minimum, label: 'minimum'},
      {data: this.actual, label: 'actual'}
    ];
    


  }



}
