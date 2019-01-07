import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Estudiantes } from "../../Model/estudiantes";
import { ESTUDIANTES } from "../../Json/estudiantes";
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  segmento:string;
  mapVi:boolean;
  activar:boolean=false;
  activarM:boolean=false;
  lat: number = -0.176446;
  lng: number = -78.482653;
  
  estudiantes:Estudiantes[];
  constructor(public navCtrl: NavController,public alerCtrl: AlertController,public toastCtrl: ToastController) {
    this.segmento="Ruta";
    this.mapVi = true;
    this.activar =false;
  }
  ngOnInit() {
    this.mapVi = true;
    this.estudiantes=ESTUDIANTES;
    console.log(this.estudiantes);
  }
  mapViewO(){
    this.mapVi = true;
  }
  mapViewC(){
    this.mapVi = false;
  }
  confirmar() {
    let confirm = this.alerCtrl.create({
      title: 'Activar Ruta',
      message: 'Desea empezar la ruta?',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
            this.activar=false;
          }
        },
        {
          text: 'Empezar',
          handler: () => {
            console.log('Agree clicked');
            this.activar=true;
            this.activarM=true;
            this.iniciarRutaT();
          }
        }
      ]
    });
    if(this.activar==true){
      confirm.present()
    }else {
      this.finalizarRutaT();
      this.activarM=false;
    } 
    
  }
  iniciarRutaT() {
    const toast = this.toastCtrl.create({
      message: 'La ruta ha sido iniciada',
      duration: 2000,
      cssClass: "toast-success"
    });
    toast.present();
  }
  finalizarRutaT() {
    const toast = this.toastCtrl.create({
      message: 'La ruta ha sido finalizada',
      duration: 2000,
      
    });
    toast.present();
  }
  locate(){
    this.lat = -0.198062;
    this.lng = -78.486559;
  }
}
