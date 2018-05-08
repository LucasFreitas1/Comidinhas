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

  items: Observable<any[]>;
  eventos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFirestore) {
    this.items = db.collection('eventos').valueChanges();
    this.items.subscribe((cadastrar) => {
      this.eventos = cadastrar
    })

  }

 
  toggleSection(i) {
    this.eventos[i].open = !this.eventos[i].open;
  }






}