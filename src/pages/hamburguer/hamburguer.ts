import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { LocalAbertoPage } from '../local-aberto/local-aberto';

@IonicPage()
@Component({
  selector: 'page-hamburguer',
  templateUrl: 'hamburguer.html',
})
export class HamburguerPage {

  itemsDistancia: Observable<any[]>;
  itemsAvaliacao: Observable<any[]>;
  itemsPreco: Observable<any[]>;
  localDistancia: any[];
  localAvaliacao: any[];
  localPreco: any[];
  localNome:any[];
  locais:any[];
  
  latRec:any;
  longRec:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,db: AngularFirestore) {
    this.itemsAvaliacao = db.collection('hamburguer', ref => ref.orderBy('nome')).valueChanges();
    this.itemsAvaliacao.subscribe((cadastrar) => {
      this.localAvaliacao = cadastrar,
        this.locais = cadastrar,
        this.localNome = cadastrar
    })

    this.latRec = navParams.get("latpassado");
    this.longRec = navParams.get("longpassado")
  }
  abrirlocal(nome: any){
    this.navCtrl.push(LocalAbertoPage, {
      atribNome : nome
    })


  }

  getDistanceFromLatLonInKm(lat1, lon1) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(this.latRec - lat1);  // deg2rad below
    var dLon = this.deg2rad(this.longRec - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(this.latRec)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    var rounded = Math.round( d * 10 ) / 10;
    return rounded;
  }
  
  deg2rad(deg) {
    return deg * (Math.PI / 180)
  }


}

