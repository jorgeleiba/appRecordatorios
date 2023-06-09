import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewreminderPage } from './newreminder.page';

const routes: Routes = [
  {
    path: '',
    component: NewreminderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewreminderPageRoutingModule {}
