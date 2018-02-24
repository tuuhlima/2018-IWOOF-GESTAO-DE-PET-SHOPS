import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { } from '@types/googlemaps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: any; 
  google: any;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter(){
    //Set latitude and longitude of some places
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.9011, lng: -56.1645 },
      zoom: 15
    });
  }

}
