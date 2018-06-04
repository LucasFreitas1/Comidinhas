import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HamburguerPage } from '../hamburguer/hamburguer';

@IonicPage()
@Component({
  selector: 'page-locais',
  templateUrl: 'locais.html',
})
export class LocaisPage {
  lat: any;
  long: any;
  nomePagina: any;
  localpassado: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geo: Geolocation) {
  }

  ionViewDidLoad() {
    this.geo.getCurrentPosition().then(pos => {
      this.lat = pos.coords.latitude;
      this.long = pos.coords.longitude;
    }).catch(err => console.log(err));
  }

  irPagina(tipo){
    switch(tipo) {
      case 'hamburguer':
      
      this.navCtrl.push(HamburguerPage,{
        latpassado: this.lat,
        longpassado: this.long,
        localpassado: tipo
      });
      break;

      case 'pizza':
      
      this.navCtrl.push(HamburguerPage,{
        latpassado: this.lat,
        longpassado: this.long,
        localpassado: tipo
      });
      break;

      case 'carnes':
      
      this.navCtrl.push(HamburguerPage,{
        latpassado: this.lat,
        longpassado: this.long,
        localpassado: tipo
      });
      break;

      case 'chinesa':
      
      this.navCtrl.push(HamburguerPage,{
        latpassado: this.lat,
        longpassado: this.long,
        localpassado: tipo
      });
      break;

      case 'cafe':
      
      this.navCtrl.push(HamburguerPage,{
        latpassado: this.lat,
        longpassado: this.long,
        localpassado: tipo
      });
      break;

      case 'doces':
      
      this.navCtrl.push(HamburguerPage,{
        latpassado: this.lat,
        longpassado: this.long,
        localpassado: tipo
      });
      break;
     
  }

  }
  




}




