import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import {Geolocation} from '@ionic-native/geolocation'

import { MyApp } from './app.component';
import { PrincipalPage } from '../pages/principal/principal';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HamburguerPage } from '../pages/hamburguer/hamburguer';
import { Ionic2RatingModule } from 'ionic2-rating';

export const firebaseConfig = {
    apiKey: "AIzaSyAhOOur-hJFWFT1cLZovmxFUeJcsqPzIPE",
    authDomain: "comidinhas-bsb.firebaseapp.com",
    databaseURL: "https://comidinhas-bsb.firebaseio.com",
    projectId: "comidinhas-bsb",
    storageBucket: "comidinhas-bsb.appspot.com",
    messagingSenderId: "221610225104"
};



@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    HamburguerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig,'comidinhasbsb'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    HamburguerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
