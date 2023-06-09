import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Nuevo recordatorio',
      url: '/newreminder',
      icon: 'create'
    },
    { 
      title: 'Mis recordatorios', 
      url: '/myreminders', 
      icon: 'time' 
    },
    { 
      title: 'Próximos', 
      url: '/next', 
      icon: 'arrow-redo' 
    },
    { 
      title: 'Pasados', 
      url: '/past', 
      icon: 'arrow-undo' 
    },
    { 
      title: 'Calendario', 
      url: '/calendario', 
      icon: 'calendar' 
    },
  ];
  public labels = [''];
  constructor() {}
}
