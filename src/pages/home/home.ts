import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  segmento:string;
  mapVi:boolean;
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(public navCtrl: NavController) {
    this.segmento="Ruta";
    this.mapVi = true;
  }
  ngOnInit() {
    this.mapVi = true;
    
  }
  mapViewO(){
    this.mapVi = true;
  }
  mapViewC(){
    this.mapVi = false;
  }
}
