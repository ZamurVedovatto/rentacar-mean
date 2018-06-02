import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../data-models/cliente.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  model = new Cliente();

  constructor(
    public clienteService: ClienteService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
  }

  addCliente() {
    this.clienteService.addCliente(this.model)
      .subscribe(() => this.goBack());
  }

  goBack() {
    this.router.navigate(['/cliente']);
  }

}
