import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CitySelectComponent } from './city-select/city-select.component';
import { HttpClientModule } from '@angular/common/http';
import { CityTableComponent } from './city-table/city-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BarchartComponent } from './barchart/barchart.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    CitySelectComponent,
    CityTableComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgSelectModule, HttpClientModule, NgxDatatableModule, ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
