import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { DatabaseService } from 'src/app/services/database.service';



@Component({
  selector: 'app-newreminder',
  templateUrl: './newreminder.page.html',
  styleUrls: ['./newreminder.page.scss'],
})
export class NewreminderPage {

  alarma = {
    horaSeleccionada: "",
    mensaje: "",
  }

  constructor(private localNotifications: LocalNotifications, private database: DatabaseService) { }


  async programarAlarma() {
    try {
      await this.database.create('alarmas', this.alarma).then(res => {
        console.log(res);
      })
    } catch (error) {
      console.log("Error al crear alarma", error);
    }
  }

  // activarAlarma() {
  //   this.localNotifications.schedule({
  //     text: this.alarma.mensaje,
  //     trigger: { at: new Date(this.alarma.horaSeleccionada) }
  //   });
  //   console.log("Esta es la hora seleccionada", this.alarma.horaSeleccionada);
  // }
}

//