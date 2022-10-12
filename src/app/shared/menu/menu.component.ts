import { Component } from '@angular/core';

interface Menu {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    
    /* solo hace hover a los elementos que no tengan la clase .active */
    li:not(.active):hover{
      background-color: #eee;
    }
    
    `
  ]
})
export class MenuComponent {

  menuItems: Menu[] = [
    { ruta: '/graficas/barras', texto: 'Barras' },
    { ruta: '/graficas/barras-doble', texto: 'Barras Doble' },
    { ruta: '/graficas/dona', texto: 'Dona' },
    { ruta: '/graficas/dona-http', texto: 'Dona Http' }
  ]

}
