import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Rooms provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Rooms {

  constructor(private http: Http) {
    console.log('Hello Rooms Provider');
  }

  getRooms(options){

    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://localhost:3000/api/rooms', JSON.stringify(options), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });

  }

  reserveRoom(data){

    return new Promise(resolve => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://localhost:3000/api/rooms/reserve', JSON.stringify(data), {headers: headers})
        .subscribe((data) => {
          resolve(data);
        });

      });
    }
}
