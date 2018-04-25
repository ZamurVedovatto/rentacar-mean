import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ManutencaoService {

  constructor(private http:Http) { }

  getManutencoes() {
    return this.http.get("http://localhost:3000/manutencao")
      .map(res => res.json());
  }

  addManutencao(novaManutencao) {    
    return this.http.post("http://localhost:3000/manutencao", novaManutencao)
      .map(res => res.json());      
  }

  getManutencao(id) {
    return this.http.get("http://localhost:3000/manutencao/" + id)
      .map(res => res.json());
  }

  deleteManutencao(id) {
    return this.http.delete("http://localhost:3000/manutencao/" + id)
      .map(res => res.json());
  }

  updateManutencao(id, info) {
    return this.http.put("http://localhost:3000/manutencao/" + id, info)
      .map(res => res.json());
  }

}
