import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // injetar como dependency no construtor
import { Router } from '@angular/router'; // injetar como dependency no construtor

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  // properties
  usuario: Object;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getPerfil().subscribe(perfil => {
      this.usuario = perfil.usuario;
      console.log(this.usuario);

    },
     err => {
       console.log(err);
       return false;
     });
  }

}
