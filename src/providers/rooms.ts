import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from '../appSetting';

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

}
