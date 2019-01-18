import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoordinadorPage } from './coordinador';

@NgModule({
  declarations: [
    CoordinadorPage,
  ],
  imports: [
    IonicPageModule.forChild(CoordinadorPage),
  ],
})
export class CoordinadorPageModule {}
