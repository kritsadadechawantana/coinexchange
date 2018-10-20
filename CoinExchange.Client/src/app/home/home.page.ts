import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { load } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, private http: HttpClient) {
    
  }
  data(){
    this.http.get("http://localhost")
      .subscribe(it => {this.data = data })

  }
  gotobuy() {
    this.navCtrl.navigateForward("buycoin");
  }


}
