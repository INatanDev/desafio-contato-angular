import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosComponent } from './contatos/contatos.component';
import { SharedModule } from '../shared/shared.module';
import { ContatosFormComponent } from './contatos-form/contatos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContatosListComponent } from './contatos-list/contatos-list.component';



@NgModule({
  declarations: [
    ContatosComponent,
    ContatosFormComponent,
    ContatosListComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ContatosModule { }
