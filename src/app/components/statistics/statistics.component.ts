import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Chart} from 'angular-highcharts';
import {StoreService} from '@Service/store.service';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass']
})
export class StatisticsComponent implements OnInit {
  currentDate: string;

  constructor(private $serviceStore: StoreService) {
    this.currentDate = moment().format('DD-MM-YYYY');
  }

  ngOnInit() {
  }

  data: any;
  chart: Chart;

  close(value) {
    this.data = this.$serviceStore.filterLanguage(moment(value).format('DD-MM-YYYY'));
    this.chart = new Chart(this.data);
  }
}
