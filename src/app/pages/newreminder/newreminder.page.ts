import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-newreminder',
  templateUrl: './newreminder.page.html',
  styleUrls: ['./newreminder.page.scss'],
})
export class NewreminderPage {
  horaSeleccionada!: string;
  mensaje!: string;

  constructor(private localNotifications: LocalNotifications) {}

  programarAlarma() {
    this.localNotifications.schedule({
      text: this.mensaje,
      trigger: { at: new Date(this.horaSeleccionada) }
    });
  }
}

//