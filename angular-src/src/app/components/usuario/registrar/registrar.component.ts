import { Component, OnInit } from '@angular/core';
import { ValidarUsuarioService } from '../validar-usuario.service'; //injetar no construtor
import { FlashMessagesService } from 'angular2-flash-messages'; //injetar no construtor

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  //properties
  nome: String;
  username: String;
  email: String;
  password: String;


  constructor(
    private validarUsuarioService: ValidarUsuarioService, 
    private flashMessage: FlashMessagesService
  ) { }


  ngOnInit() {
  }

  //envio de dados do formulário de cadastro de novo usuário
  submeterRegistro(){
    const usuario = {
      nome: this.nome,
      email: this.email,
      username: this.username,
      password: this.password
    }

    //validação de required fields
    if (!this.validarUsuarioService.validarRegistro(usuario)){
      this.flashMessage.show('Por favor, preencha todos os campos', {cssClass: 'alert-warning', timeout: 3000});
      return false;      
    }

    //validação de email
    if (!this.validarUsuarioService.validarEmail(usuario.email)){
      this.flashMessage.show('Por favor, preencha o email corretamente', {cssClass: 'alert-warning', timeout: 3000});
      return false;      
    }

  }

}
