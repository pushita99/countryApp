import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionlPageComponent } from './pages/by-regionl-page/by-regionl-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
const routes: Routes = [
  {

    path: 'by-capital',
    component: ByCapitalPageComponent,
  },
  {
    path: 'by-country',
    component: ByCountryPageComponent,

  },
  {
    path: 'by-regionl',
    component: ByRegionlPageComponent,
  },
  {
    path: 'by/:id',
    component: CountryPageComponent,
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class CountriesRoutingModule { }
