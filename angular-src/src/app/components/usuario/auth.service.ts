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
  

  //autenticar usuario registrado
  autenticarUsuario(usuario){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/usuario/autenticar', usuario, {headers: headers})
      .map(res => res.json());
  }

  //armazernar dados do usuário ao efetuar o login
  armazenarDadosUsuario(token, usuario){
    
    localStorage.setItem('id_token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario)); //localstorage só armazena strings, não armazena objetos
    this.authToken = token;
    this.usuario = usuario;
  }

  //logout usuario
  logout(){
    this.authToken = null;
    this.usuario = null;
    localStorage.clear();
  }

}
