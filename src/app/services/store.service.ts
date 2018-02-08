import {Injectable} from '@angular/core';
import {_} from 'underscore';

export interface ILanguage {
  name: string;
  y: number;
}

export interface ILanguages {
  selectedDate: string;
  data: ILanguage[];
}

@Injectable()
export class StoreService {

  languagesArray: ILanguages[] = [];

  constructor() {
  }


  addLanguage(newLanguage: ILanguages) {
    if (this.languagesArray.length > 0) {
      const languagesArrayClone = Object.assign([], this.languagesArray);
      languagesArrayClone.forEach(item => {
        if (item.selectedDate === newLanguage.selectedDate) {
          newLanguage.data.forEach(itemNewArray => {
            if (_.findWhere(item.data, itemNewArray) == null) {
              item.data.forEach(itemOldArray => {
                if (itemOldArray.name === itemNewArray.name) {
                  itemOldArray.y = itemNewArray.y;
                } else {
                  item.data.push(itemNewArray);
                }
              });
            }
          });
        }
      });
      this.languagesArray = languagesArrayClone;
    } else {
      this.languagesArray.push(newLanguage);
    }

  }

  filterLanguage(date: string) {
    const language = this.languagesArray.filter(x => x.selectedDate === date);
    if (language.length > 0) {
      return this.getHighcharts(language[0]);
    } else {
      return this.getHighcharts();
    }
  }

  getHighcharts(data?) {
    return {
      chart: {
        type: 'column'
      },
      title: {
        text: `The statistics of languages ${!!data ? 'for ' + data.selectedDate : ''}`
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Total percent market share'
        }

      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%',
          }
        }
      },
      series: [{
        name: 'LANGUAGES',
        data: !!data ? data.data : [{}]
      }]
    };
  }

}
