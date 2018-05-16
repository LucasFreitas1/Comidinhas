import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';



import { MyApp } from './app.component';
import { PrincipalPage } from '../pages/principal/principal';





import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


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
    PrincipalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig,'comidinhasbsb'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
