import { Component, Input, OnInit } from '@angular/core';

import { Contatos } from '../models/contatos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contatos-list',
  templateUrl: './contatos-list.component.html',
  styleUrls: ['./contatos-list.component.scss']
})
export class ContatosListComponent implements OnInit {

  @Input() contatos: Contatos[] = [];

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

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  toggleAtivo(contato: Contatos): void {
    contato.ativo = contato.ativo === 's' ? 'n' : 's';
  }

  toggleFavorito(contato: Contatos): void {
    contato.favorito = contato.favorito === 's' ? 'n' : 's';
  }

}
