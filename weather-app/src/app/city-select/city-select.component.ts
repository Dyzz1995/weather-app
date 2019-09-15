import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.scss']
})
export class CitySelectComponent implements OnInit {
  @Output() submitCities = new EventEmitter<string[]>(); 

  citiesList = [
      'Lisboa', 
      'Aveiro',
      'Porto', 
      'Praga' 
  ];
  
  cities: string[] = [];

  ngOnInit() {

  }

  onSubmit(){
    this.submitCities.emit(this.cities);
    
  }
}
