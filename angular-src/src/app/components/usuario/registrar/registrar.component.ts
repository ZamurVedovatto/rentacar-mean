import { Component, OnInit } from '@angular/core';
import { ValidarUsuarioService } from '../validar-usuario.service'; //injetar no construtor
import { AuthService } from '../auth.service'; //injetar no construtor
import { FlashMessagesService } from 'angular2-flash-messages'; //injetar no construtor
import { Router } from '@angular/router'; //injetar no construtor

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
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
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

    //registrar usuario (this is an observable)
    this.authService.registrarUsuario(usuario)
      .subscribe(data => {
        if(data.success){
          this.flashMessage.show('Você foi registrado com sucesso e pode realizar o login', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['usuario/login']);
        } else {
          this.flashMessage.show('Algo deu errado em seu registro', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['usuario/registrar']);
        }
      })

  }

}
