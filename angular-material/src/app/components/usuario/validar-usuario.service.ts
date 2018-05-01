import { Injectable } from '@angular/core';

@Injectable()
export class ValidarUsuarioService {

  constructor() { }

  // validar cadastro de novo usuario
  validarRegistro(usuario) {
    if (usuario.nome === undefined || usuario.email === undefined || usuario.username === undefined || usuario.password === undefined) {
      return false;
    } else {
      return true;
    }
  }

  // validar email com uma regular expression
  validarEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
  }
}
