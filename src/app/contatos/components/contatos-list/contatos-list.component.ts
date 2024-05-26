import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Contatos } from '../../models/contatos';


@Component({
  selector: 'app-contatos-list',
  templateUrl: './contatos-list.component.html',
  styleUrls: ['./contatos-list.component.scss']
})
export class ContatosListComponent implements OnInit {

  @Input() contatos: Contatos[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = [
    'nome',
    'email',
    'celular',
    'telefone',
    'favorito',
    'ativo',
    'cadastro',
    'acoes'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

  toggleAtivo(contato: Contatos): void {
    contato.ativo = contato.ativo === 's' ? 'n' : 's';
  }

  toggleFavorito(contato: Contatos): void {
    contato.favorito = contato.favorito === 's' ? 'n' : 's';
  }

}
