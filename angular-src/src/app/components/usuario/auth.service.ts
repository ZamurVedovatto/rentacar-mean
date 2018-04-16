import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; //colocar também no construtor
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


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

  //buscar informações do perfil do usuário logado
  getPerfil() {
    let headers = new Headers();
    this.carregarToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');    
    return this.http.get('http://localhost:3000/usuario/perfil', {headers: headers})
      .map(res => res.json());      
  }

  //armazernar dados do usuário ao efetuar o login
  armazenarDadosUsuario(token, usuario){    
    localStorage.setItem('id_token', token);
    localStorage.setItem('http://localhost:3000/usuario', JSON.stringify(usuario));
    this.authToken = token;
    this.usuario = usuario;
  }

  //buscar dados do token no localstorage
  carregarToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  //logout usuario
  logout(){
    this.authToken = null;
    this.usuario = null;
    localStorage.clear();
  }

}
