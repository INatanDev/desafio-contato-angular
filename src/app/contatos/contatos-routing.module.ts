import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './contatos/contatos.component';
import { ContatosFormComponent } from './contatos-form/contatos-form.component';

const routes: Routes = [
  { path: '', component: ContatosComponent},
  { path: 'new', component: ContatosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }

