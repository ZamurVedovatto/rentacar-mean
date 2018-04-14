import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AluguelService {

  constructor(private http:Http) { }


  getAlugueis() {
    return this.http.get("http://localhost:3000/aluguel")
      .map(res => res.json());
  }

  addAluguel(info) {
    return this.http.post("http://localhost:3000/aluguel", info)
      .map(res => res.json());
  }

  getAluguel(id) {
    return this.http.get("http://localhost:3000/aluguel/" + id)
      .map(res => res.json());
  }

  deleteAluguel(id) {
    return this.http.delete("http://localhost:3000/aluguel/" + id)
      .map(res => res.json());
  }

  updateAluguel(id, info) {
    return this.http.put("http://localhost:3000/aluguel/" + id, info)
      .map(res => res.json());
  }

}
