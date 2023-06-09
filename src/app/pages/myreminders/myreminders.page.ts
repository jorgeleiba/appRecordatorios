import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-myreminders',
  templateUrl: './myreminders.page.html',
  styleUrls: ['./myreminders.page.scss'],
})
export class MyremindersPage{

  alarmas!: any[];

  constructor(private localNotifications: LocalNotifications) {}

  ionViewDidEnter() {
    this.localNotifications.getAllScheduled().then((alarmas) => {
      this.alarmas = alarmas;
    });
  }
  
  cancelarAlarma(id: number) {
    this.localNotifications.cancel(id);
    // Actualizar la lista de alarmas después de cancelar una de ellas
    this.localNotifications.getAllScheduled().then((alarmas) => {
      this.alarmas = alarmas;
    });
  }
}
