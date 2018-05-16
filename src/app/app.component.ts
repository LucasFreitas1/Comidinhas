import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PrincipalPage } from '../pages/principal/principal';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = PrincipalPage;
  loader: any;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public loadingCtrl: LoadingController, public storage: Storage) {
    this.presentLoading();
    //abrir o slider inicial somente na primeira vez que inicializa o app
    platform.ready().then(() => {
      this.storage.get('introShown').then((result) => {

        if (result) {
          this.rootPage = PrincipalPage;
        } else {
          this.rootPage = 'SliderPage';
          this.storage.set('introShown', true);
        }

        this.loader.dismiss();
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: "Carregando.."
    });

    this.loader.present();

  }

}


