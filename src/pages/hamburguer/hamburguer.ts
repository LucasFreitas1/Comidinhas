import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams,db: AngularFirestore) {
    this.itemsAvaliacao = db.collection('hamburguer', ref => ref.orderBy('nome')).valueChanges();
    this.itemsAvaliacao.subscribe((cadastrar) => {
      this.localAvaliacao = cadastrar,
        this.locais = cadastrar,
        this.localNome = cadastrar
    })

  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HamburguerPage');
  }

}
