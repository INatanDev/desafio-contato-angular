import { ContatosService } from './../services/contatos.service';
import { Component, OnInit } from '@angular/core';

import { Contatos } from '../models/contatos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos$: Observable<Contatos[]>;
  displayedColumns = [
    'nome',
    'email',
    'celular',
    'telefone',
    'favorito',
    'ativo',
    'data_cadastro'
  ];

  constructor(private contatosService: ContatosService) {
    this.contatos$ = this.contatosService.list();
  }

  ngOnInit(): void {
  }

}
