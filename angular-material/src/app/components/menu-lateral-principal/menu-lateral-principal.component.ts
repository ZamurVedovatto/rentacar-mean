import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // TESTE (REMOVER, SE DESNECESSÁRIO)

@Component({
  selector: 'app-menu-lateral-principal',
  templateUrl: './menu-lateral-principal.component.html',
  styleUrls: ['./menu-lateral-principal.component.css']
})
export class MenuLateralPrincipalComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
