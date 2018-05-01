import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // injetar no construtor
import { Router } from '@angular/router'; // injetar no construtor
import { FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material'; // injetar no construtor

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  // properties
  hide = true;

  // user properts
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

  constructor(
    private authService: AuthService,
    private router: Router,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('email') ? 'Email inválido' : '';
  }

  openSnackbarRegistroValido(user) {
    this.snackBar.open(`Usuário ${user.name} cadastrado com sucesso`, '', {
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
    const user = {
      name: this.name,
      username: this.username,
      email: this.email.value,
      password: this.password,
      address: {
          street: this.street,
          number: this.number,
          city: this.city,
          zipCode: this.zipCode,
      },
      phone: this.phone,
      cellPhone: this.cellPhone,
      linkedin: this.linkedin
    };

    // registrar usuario (this is an observable)
    this.authService.registrarUsuario(user)
      .subscribe(data => {
        if (data.success) {
          this.openSnackbarRegistroValido(user);
          this.router.navigate(['usuario/login']);
        } else {
          this.openSnackbarRegistroInvalido();
          this.router.navigate(['usuario/registrar']);
        }
      });
  }
}
