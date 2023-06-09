import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyremindersPageRoutingModule } from './myreminders-routing.module';

import { MyremindersPage } from './myreminders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyremindersPageRoutingModule
  ],
  declarations: [MyremindersPage]
})
export class MyremindersPageModule {}
