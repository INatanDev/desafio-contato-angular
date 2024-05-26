import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './containers/contatos/contatos.component';
import { ContatosFormComponent } from './containers/contatos-form/contatos-form.component';


const routes: Routes = [
  { path: '', component: ContatosComponent},
  { path: 'new', component: ContatosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }

