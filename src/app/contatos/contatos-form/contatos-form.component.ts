import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ContatosService } from '../services/contatos.service';

@Component({
  selector: 'app-contatos-form',
  templateUrl: './contatos-form.component.html',
  styleUrls: ['./contatos-form.component.scss']
})
export class ContatosFormComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(private formBuider: UntypedFormBuilder,
    private service: ContatosService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.formBuider.group({
      nome: [null],
      email: [null],
      celular: [null],
      telefone: [null],
      favorito: [null],
      ativo: [null],
    });
  }

  onSubmit(){
    console.log(this.form.value)
    this.service.save(this.form.value)
    .subscribe(data => this.onSucess(), error =>
      this.onError()
    );
  }

  onCancel(){
    this.location.back();
  }

  private onError(){
    this.snackBar.open('Error ao salvar contato!',  '', { duration: 5000 });
  }

  private onSucess() {
    this.snackBar.open('Contato salvo com sucesso!',  '', { duration: 5000 });
    this.onCancel();
  }

  ngOnInit(): void {
  }

}
