import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyremindersPage } from './myreminders.page';

const routes: Routes = [
  {
    path: '',
    component: MyremindersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyremindersPageRoutingModule {}
