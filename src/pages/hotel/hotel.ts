import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';

/*
  Generated class for the Hotel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html'
})

export class HotelPage {

  constructor(private navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Hotel Page');
  }

  openSearch(){
      this.navCtrl.push(SearchPage);
    }
}
