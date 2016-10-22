import {
    Component
} from '@angular/core';
import {
    NavController,
    NavParams,
    LoadingController
} from 'ionic-angular';
import {
    Rooms
} from '../../providers/rooms/rooms';

/*
  Generated class for the Booking page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-booking',
    templateUrl: 'booking.html'
})
export class Booking {

    room: any;
    details: any;
    checkIn: any;
    checkOut: any;

    constructor(private nav: NavController, private navParams: NavParams, private roomsService: Rooms, private loadingCtrl: LoadingController) {
        this.room = this.navParams.get('room');
        this.details = this.navParams.get('details');
        this.checkIn = new Date(this.details.from).toString().substring(0, 15);
        this.checkOut = new Date(this.details.to).toString().substring(0, 15);
    }

    book() {

        let newReservation = {
            _id: this.room._id,
            from: this.details.from.substring(0, 10),
            to: this.details.from.substring(0, 10)
        }

        let loading = this.loadingCtrl.create({
            content: "Booking room..."
        });

        loading.present();

        this.roomsService.reserveRoom(newReservation).then((res) => {

            loading.dismiss();
            this.nav.popToRoot();

        }, (err) => {
            console.log(err);
        });

    }

    ionViewDidLoad() {
        console.log('Hello Booking Page');
    }

}
