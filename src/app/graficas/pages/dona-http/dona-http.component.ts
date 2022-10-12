import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html'
})
export class DonaHttpComponent implements OnInit {
  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: []
  };

  constructor( private graficaService: GraficasService ) { }

  ngOnInit(): void {

    // this.graficaService.getUserSocial() 
    //   .subscribe( data => {
    //     // console.log(data);
    //     const value: number[] = Object.values( data );

    //     this.doughnutChartData.labels = Object.keys( data );
    //     this.doughnutChartData.datasets.push( {data:value} );
    //   });

    this.graficaService.getUserSocialDona()
      .subscribe( ({labels, value}) => {
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets.push( value );
      });

  }

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
