import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // injetar como dependency no construtor
import { Router } from '@angular/router'; // injetar como dependency no construtor
import { ValidarUsuarioService } from '../validar-usuario.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // properties
  hide = true;
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    public snackbar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  snackBarLogin(usuario) {
    this.snackbar.open(usuario.fullName + ' logado com sucesso', '', {
      duration: 3000
    });
  }

  snackBarWrongLogin() {
    this.snackbar.open('Usuario ou senha incorretos', '', {
      duration: 3000
    });
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
          this.snackBarLogin(data.usuario);
          this.router.navigate(['veiculo']);

        } else {
          this.snackBarWrongLogin();
          this.router.navigate(['usuario/login']);
        }

      });
  }

}
