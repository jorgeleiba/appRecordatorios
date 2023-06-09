import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewreminderPageRoutingModule } from './newreminder-routing.module';

import { NewreminderPage } from './newreminder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewreminderPageRoutingModule
  ],
  declarations: [NewreminderPage]
})
export class NewreminderPageModule {}
