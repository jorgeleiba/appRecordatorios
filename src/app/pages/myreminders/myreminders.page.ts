import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-myreminders',
  templateUrl: './myreminders.page.html',
  styleUrls: ['./myreminders.page.scss'],
})
export class MyremindersPage{

  alarmas!: any[];
  
  constructor(private database: DatabaseService) {}

  cancelarAlarma(){

  }

  async mostrarAlarmas(){
    this.database.getAll('alarmas');
  }
}
  
 

 
  