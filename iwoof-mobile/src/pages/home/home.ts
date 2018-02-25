import { NavController } from 'ionic-angular';
import { Component, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular';
import { } from '@types/googlemaps'; /* import google maps*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  autocompleteItems: any;
  autocomplete: any;
  GoogleAutocomplete: any;
  map: any; 
  google: any;

  constructor(
    public navCtrl: NavController,
    public zone: NgZone,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController
  ) {
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
  }
  
  ionViewDidEnter(){
    //Set latitude and longitude of some places
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.9011, lng: -56.1645 },
      zoom: 15
    });
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
  }

  updateSearchResults(){
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
    (predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
  }

}
