import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // injetar como dependency no construtor
import { Router } from '@angular/router'; // injetar como dependency no construtor
// import { FlashMessagesService } from 'angular2-flash-messages'; // injetar como dependency no construtor
import { ValidarUsuarioService } from '../validar-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // properties
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router
    // private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  // submeter formulario de login
  onLoginSubmit() {
    const usuario = {
      username: this.username,
      password: this.password
    };

    this.authService.autenticarUsuario(usuario)
      .subscribe(data => {

        if (data.success) {
          this.authService.armazenarDadosUsuario(data.token, data.usuario);

          /* this.flashMessage.show('Você está logado', {
            cssClass: 'alert-success',
            timeout: 5000});
          */

          this.router.navigate(['usuario/perfil']);
        } else {

          /*
          this.flashMessage.show(data.msg, {
            cssClass: 'alert-danger',
            timeout: 5000});
          */

          this.router.navigate(['usuario/login']);
        }

      });
  }

}
