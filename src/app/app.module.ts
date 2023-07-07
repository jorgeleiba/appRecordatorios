import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagePipe } from './pages/page.pipe';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent, PagePipe],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, LocalNotifications],
  bootstrap: [AppComponent],
})
export class AppModule { }
