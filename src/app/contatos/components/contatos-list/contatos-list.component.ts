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
  @Output() edit = new EventEmitter(false);

  filteredContatos: Contatos[] = [];

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
    this.filteredContatos = this.contatos;
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(contatos: Contatos){
    this.edit.emit(contatos);
  }

  toggleAtivo(contato: Contatos): void {
    contato.ativo = contato.ativo === 's' ? 'n' : 's';
  }

  toggleFavorito(contato: Contatos): void {
    contato.favorito = contato.favorito === 's' ? 'n' : 's';
  }

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value.trim().toLowerCase();
    this.filteredContatos = this.contatos.filter(contato =>
      contato.nome.toLowerCase().includes(value) ||
      contato.email.toLowerCase().includes(value)
    );
  }
}
