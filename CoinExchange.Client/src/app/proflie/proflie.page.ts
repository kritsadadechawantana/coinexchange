import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-proflie',
  templateUrl: './proflie.page.html',
  styleUrls: ['./proflie.page.scss'],
})
export class ProfliePage implements OnInit {

  constructor(public navCtrl:NavController){

  }
  gotosale(){
    this.navCtrl.navigateForward("salecoin") 
  }

  ngOnInit() {
  }

}
