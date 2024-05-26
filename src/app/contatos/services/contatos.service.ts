import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Contatos } from '../models/contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  private readonly API = 'api/contato';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Contatos[]>(this.API)
    .pipe(
      first(),
      tap(contatos => console.log(contatos))
    );
  }

  save(record: Contatos ){
    return this.httpClient.post<Contatos[]>(this.API, record).pipe(first());
  }
}
