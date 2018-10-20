import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-buycoin',
  templateUrl: './buycoin.page.html',
  styleUrls: ['./buycoin.page.scss'],
})
export class BuycoinPage implements OnInit {

  constructor(public navCtrl:NavController){

  }

  ngOnInit() {
  }
  gotohome(){
    this.navCtrl.navigateForward("home")
  }
}
