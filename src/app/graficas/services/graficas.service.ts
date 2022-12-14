import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }

  getUserSocial() {
    // return this.http.get('http://localhost:3000/grafica');
    let header = new HttpHeaders().set('Access-Control-Allow-Origin','*')
      .set('Access-Control-Allow-Origin', 'http://localhost:3000');
    return this.http.get('https://my-json-server.typicode.com/Jhonatanzr/graficas-server/main/db.json/grafica',{headers:header});
  }

  getUserSocialDona() {
    return this.getUserSocial()
      .pipe(
        delay(1000),//es como un timer de 1 segundo
        map( data => {//Modifico la respuesta antes de enviarla al componente
          const labels = Object.keys( data );
          const values = Object.values( data );
          return { labels, value :{data: values} };
        })
      )
  }

}
