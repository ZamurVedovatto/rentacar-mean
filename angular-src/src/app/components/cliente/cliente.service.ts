import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ClienteService {

  constructor(private http:Http) { }


  getClientes() {
    return this.http.get("http://localhost:3000/cliente")
      .map(res => res.json());
  }

  addCliente(info) {
    return this.http.post("http://localhost:3000/cliente", info)
      .map(res => res.json());
  }

  getCliente(id) {
    return this.http.get("http://localhost:3000/cliente/" + id)
      .map(res => res.json());
  }

  deleteCliente(id) {
    return this.http.delete("http://localhost:3000/cliente/" + id)
      .map(res => res.json());
  }

  updateCliente(id, info) {
    return this.http.put("http://localhost:3000/cliente/" + id, info)
      .map(res => res.json());
  }

}
