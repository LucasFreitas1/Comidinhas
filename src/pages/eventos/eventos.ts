import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { EventoPage } from '../evento/evento'


@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  items: Observable<any[]>;


  public nomeEnviado;

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFirestore) {
    this.items = db.collection('eventos').valueChanges();
  }

  irEvento(nomeEnviado) {
 
    this.navCtrl.push(EventoPage, this.nomeEnviado);

  }



}
