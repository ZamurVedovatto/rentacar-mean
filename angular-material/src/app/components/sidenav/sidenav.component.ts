import { Component, OnInit } from '@angular/core';
import { AuthService } from '../usuario/auth.service'; // injetar como dependency no construtor

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
