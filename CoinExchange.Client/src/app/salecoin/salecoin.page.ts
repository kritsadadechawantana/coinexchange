import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-salecoin',
  templateUrl: './salecoin.page.html',
  styleUrls: ['./salecoin.page.scss'],
})
export class SalecoinPage implements OnInit {

  constructor(public navCtrl:NavController){

  }

  ngOnInit() {
  }
  gotohome(){
    this.navCtrl.navigateForward("home")
  }

}
