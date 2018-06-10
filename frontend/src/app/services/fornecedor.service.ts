import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Fornecedor } from '../data-models/fornecedor.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FornecedorService {

  constructor(private http: Http) { }

  getFornecedores() {
    return this.http.get('http://localhost:3000/fornecedor')
      .map(res => res.json());
  }

  addFornecedor(info) {
    return this.http.post('http://localhost:3000/fornecedor', info)
      .map(res => res.json());
  }

  getFornecedor(id) {
    return this.http.get('http://localhost:3000/fornecedor/' + id)
      .map(res => res.json());
  }

  deleteFornecedor(id) {
    return this.http.delete('http://localhost:3000/fornecedor/' + id)
      .map(res => res.json());
  }

  updateFornecedor(id, info) {
    return this.http.put('http://localhost:3000/fornecedor/' + id, info)
      .map(res => res.json());
  }

}

