import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ConferenceApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { AboutPage } from '../pages/about/about';
import { AvailableRoomsPage } from '../pages/available-rooms/available-rooms';
import { BookingPage } from '../pages/booking/booking';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { HotelPage } from '../pages/hotel/hotel';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SearchPage } from '../pages/search/search';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { ConferenceData } from '../providers/conference-data';
import { Rooms } from '../providers/rooms/rooms';
import { UserData } from '../providers/user-data';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '296a86e1'
  }
};

@NgModule({
  declarations: [
    ConferenceApp,
    AvailableRoomsPage,
    AboutPage,
    AccountPage,
    BookingPage,
    LoginPage,
    HotelPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SearchPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage
  ],
  imports: [
    IonicModule.forRoot(ConferenceApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AvailableRoomsPage,
    AboutPage,
    AccountPage,
    BookingPage,
    LoginPage,
    HotelPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SearchPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage
  ],
  providers: [ConferenceData, UserData, Storage, Rooms]
})
export class AppModule {}
