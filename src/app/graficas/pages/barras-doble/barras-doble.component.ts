import { Component } from '@angular/core';

import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html'
})
export class BarrasDobleComponent {

  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];

  proveedoresData: ChartData<'bar'> = {
    labels: this.proveedoresLabels,
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Vendedor A', backgroundColor: '#85B4FA' },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B', backgroundColor: '#8DF599' },
    ]
  };

  productoData: ChartData<'bar'> = {
    labels: this.proveedoresLabels,
    datasets: [
      { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: '#85B4FA' }
    ]
  };
  

}
