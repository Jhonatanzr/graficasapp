import { Component } from '@angular/core';

import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html'
})
export class DonaComponent {
  // Doughnut

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: ['#C4A4FD','#B0BEFA','#A4E3FD'] },
      { data: [ 50, 150, 120 ], backgroundColor: ['#C4A4FD','#B0BEFA','#A4E3FD'] },
      { data: [ 250, 130, 70 ], backgroundColor: ['#C4A4FD','#B0BEFA','#A4E3FD'] }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
