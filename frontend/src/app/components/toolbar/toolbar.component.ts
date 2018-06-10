import { Component, OnInit } from '@angular/core';
import { AuthService } from '../usuario/auth.service'; // injetar como dependency no construtor
import { Router } from '@angular/router'; // injetar como dependency no construtor

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

    // ao usuário clicar em logout
    onLogoutClick() {
      this.authService.logout();
      // this.flashMessage.show('Você foi deslogado', {cssClass: 'alert-warning', timeout: 3000})
      this.router.navigate(['usuario/login']);
      return false;
    }
}
