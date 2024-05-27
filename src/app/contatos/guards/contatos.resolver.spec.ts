import { TestBed } from '@angular/core/testing';

import { ContatosResolver } from './contatos.resolver';

describe('ContatosResolver', () => {
  let resolver: ContatosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ContatosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
