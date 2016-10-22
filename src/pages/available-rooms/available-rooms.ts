import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BookingPage } from '../booking/booking';

/*
  Generated class for the AvailableRooms page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-available-rooms',
  templateUrl: 'available-rooms.html'
})
export class AvailableRooms {

  rooms: any;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.rooms = this.navParams.get('rooms');
  }

  ionViewDidLoad() {
    console.log('Hello AvailableRooms Page');
  }

  bookRoom(room){
        this.nav.push(BookingPage, {
            room: room,
            details: this.navParams.get('details')
        });
    }

}
