import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class VeiculoService {

  constructor(private http:Http) { }


  getVeiculos() {
    return this.http.get("http://localhost:3000/veiculo")
      .map(res => res.json());
  }

  addVeiculo(info) {
    return this.http.post("http://localhost:3000/veiculo", info)
      .map(res => res.json());
  }

  getVeiculo(id) {
    return this.http.get("http://localhost:3000/veiculo/" + id)
      .map(res => res.json());
  }

  deleteVeiculo(id) {
    return this.http.delete("http://localhost:3000/veiculo/" + id)
      .map(res => res.json());
  }

  updateVeiculo(id, info) {
    return this.http.put("http://localhost:3000/veiculo/" + id, info)
      .map(res => res.json());
  }

}
