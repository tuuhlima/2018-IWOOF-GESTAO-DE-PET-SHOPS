import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  geolocation: string = 'R.Diamantina, 2-130, Paraisópolis-MG, 37660-000'
  test: any = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  categories(category : string){
    console.log(category)
  }

  getGeolocation() {
    this.test++;
  }

}
