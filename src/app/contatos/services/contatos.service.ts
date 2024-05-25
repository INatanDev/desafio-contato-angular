import { Injectable } from '@angular/core';
import { Contatos } from '../models/contatos';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  constructor(private httpClient: HttpClient) { }

  list(): Contatos[] {
    return[
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
  }
}
