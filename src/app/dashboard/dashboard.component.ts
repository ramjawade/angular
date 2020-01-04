import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: any;
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      legend: {
        layout: 'vertical',
        align: 'right',
        y: 0,
        padding: 5,
        itemMarginTop: 5,
        verticalAlign: 'top',
        itemMarginBottom: 5,
        labelFormatter: function () {
          return  '<span style="font-size: 16px; font-weight: normal">' + this.name + '</span>' + '<span fxFlex> ' + this.y + '<span>';
        }
     },
      title: {
        text: ''
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          showInLegend : true
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
          ['Borrow', 58.9],
          ['Loan Emi', 13.29],
          ['Rent', 13],
          ['Others', 3.78],
          ['Safari', 3.42],
          {
            name: 'Other',
            y: 7.61,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    };
  }

}
