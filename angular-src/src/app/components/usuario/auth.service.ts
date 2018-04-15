import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; //colocar também no construtor
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  //properties
  authToken: any;
  usuario: any;

  constructor(private http: Http) { }

  //registrar novo usuario
  registrarUsuario(usuario) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/usuario/registrar', usuario, {headers: headers})
      .map(res => res.json());
  };
  

}
