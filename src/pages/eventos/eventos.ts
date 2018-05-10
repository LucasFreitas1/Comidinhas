import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';



@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html'
})


export class EventosPage {

  itemsData: Observable<any[]>;
  itemsLocal: Observable<any[]>;
  eventosData: any[];
  eventosLocal: any[];
  eventos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFirestore) {

    this.itemsData = db.collection('eventos', ref => ref.orderBy('data')).valueChanges();
    this.itemsData.subscribe((cadastrar) => {
      this.eventosData = cadastrar,
        this.eventos = cadastrar
    })

    this.itemsLocal = db.collection('eventos', ref => ref.orderBy('localizacao')).valueChanges();
    this.itemsLocal.subscribe((cadastrar) => {
      this.eventosLocal = cadastrar

    })



  }

  defineFiltro(valor) {
    if (valor == 1) {
      this.eventos = this.eventosData;
    } else if (valor == 2) {
      this.eventos = this.eventosLocal;
    }

  }

  toggleSection(i) {
    this.eventos[i].open = !this.eventos[i].open;
  }








}