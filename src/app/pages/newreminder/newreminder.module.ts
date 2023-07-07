import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewreminderPageRoutingModule } from './newreminder-routing.module';

import { NewreminderPage } from './newreminder.page';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../../environments/environment.prod';
import { DatabaseService } from 'src/app/services/database.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewreminderPageRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [DatabaseService],
  declarations: [NewreminderPage]
})
export class NewreminderPageModule {}
