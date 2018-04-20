import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SeguroService {

  constructor(private http:Http) { }

  getSeguros() {
    return this.http.get("http://localhost:3000/seguro")
      .map(res => res.json());
  }

  addSeguro(info) {
    return this.http.post("http://localhost:3000/seguro", info)
      .map(res => res.json());
  }

  getSeguro(id) {
    return this.http.get("http://localhost:3000/seguro/" + id)
      .map(res => res.json());
  }

  deleteSeguro(id) {
    return this.http.delete("http://localhost:3000/seguro/" + id)
      .map(res => res.json());
  }

  updateSeguro(id, info) {
    return this.http.put("http://localhost:3000/seguro/" + id, info)
      .map(res => res.json());
  }

}
