import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContatosService } from '../services/contatos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contatos-form',
  templateUrl: './contatos-form.component.html',
  styleUrls: ['./contatos-form.component.scss']
})
export class ContatosFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuider: FormBuilder,
    private service: ContatosService,
    private snackBar: MatSnackBar
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
    .subscribe(data => console.log(data), error =>
      this.onError()
    );
  }

  onCancel(){}

  private onError(){
    this.snackBar.open('Error ao salvar contato',  '', { duration: 5000 }
      );
  }

  ngOnInit(): void {
  }

}
