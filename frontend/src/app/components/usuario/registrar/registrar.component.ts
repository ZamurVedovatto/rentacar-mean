import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // injetar no construtor
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material'; // injetar no construtor
import { User } from '../../../data-models/user.model';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  // properties
  hide = true;

  // user properties
  user = new User();
  /*
  name: String;
  username: String;
  email = new FormControl('', [Validators.email]);
  password: String;
  street: String;
  number: String;
  city: String;
  zipCode: String;
  phone: String;
  cellPhone: String;
  linkedin: String;
  */

  constructor(
    public route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  openSnackbarRegistroValido(user) {
    this.snackBar.open(`Usuário ${user.fullName} cadastrado com sucesso`, '', {
      duration: 5000
    });
  }

  openSnackbarRegistroInvalido() {
    this.snackBar.open('Erro ao cadastrar usuário', '', {
      duration: 3000
    });
  }

  // envio de dados do formulário de cadastro de novo usuário
  submeterRegistro() {

    // registrar usuario (this is an observable)
    this.authService.registrarUsuario(this.user)
      .subscribe(data => {
        if (data.success) {
          this.openSnackbarRegistroValido(this.user);
          this.router.navigate(['usuario/login']);
        } else {
          this.openSnackbarRegistroInvalido();
          this.router.navigate(['usuario/registrar']);
        }
      });
  }
}
