import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByRegionlPageComponent } from './pages/by-regionl-page/by-regionl-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';



@NgModule({
  declarations: [
    ByRegionlPageComponent,
    ByCapitalPageComponent,
    ByCountryPageComponent,
    CountryPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
