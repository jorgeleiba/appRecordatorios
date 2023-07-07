import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/calendario',
    pathMatch: 'full'
  },

  {
    path: 'newreminder',
    loadChildren: () => import('./pages/newreminder/newreminder.module').then( m => m.NewreminderPageModule)
  },
  {
    path: 'myreminders',
    loadChildren: () => import('./pages/myreminders/myreminders.module').then( m => m.MyremindersPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
