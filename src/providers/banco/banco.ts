import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class BancoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BancoProvider Provider');
  }

}
