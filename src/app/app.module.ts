import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartModule} from 'angular-highcharts';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from '@Component/home/home.component';
import {StatisticsComponent} from '@Component/statistics/statistics.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import {StoreService} from '@Service/store.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DpDatePickerModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
