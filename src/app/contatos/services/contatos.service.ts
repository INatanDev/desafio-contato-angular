import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

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
      //delay(5000),
      tap(contatos => console.log(contatos))
    );
  }

  save(record: Partial<Contatos>){
    return this.httpClient.post<Contatos[]>(this.API, record).pipe(first());
  }

  loadById(id: string){
    return this.httpClient.get<Contatos>(`${this.API}/${id}`);
  }
}
