import { ContatosService } from './../services/contatos.service';
import { Component, OnInit } from '@angular/core';

import { Contatos } from '../models/contatos';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos: Contatos[] = [
    {_id: "1",
      nome: "Natan",
      email: "teste@teste.com",
      celular: "91919191912",
      telefone: "8181818182",
      favorito: true,
      ativo: false,
      data_cadastro: "10/08/1998"
    }
  ];
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
    this.contatos = this.contatosService.list();
  }

  ngOnInit(): void {
  }

}
