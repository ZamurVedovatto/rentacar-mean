import { Component, OnInit } from '@angular/core';
import { AuthService } from '../usuario/auth.service'; //injetar como dependency no construtor
import { Router } from '@angular/router'; //injetar como dependency no construtor
import { FlashMessagesService } from 'angular2-flash-messages'; //injetar como dependency no construtor

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.css'
  ]
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  //ao usuário clicar em logout
  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('Você foi deslogado', {cssClass: 'alert-warning', timeout: 3000})

    this.router.navigate(['usuario/login']);
    return false;
  };
}
