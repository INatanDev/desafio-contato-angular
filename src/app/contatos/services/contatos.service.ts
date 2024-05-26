import { Injectable } from '@angular/core';
import { Contatos } from '../models/contatos';
import { HttpClient} from '@angular/common/http'
import { delay, first, take, tap } from 'rxjs';

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
}
