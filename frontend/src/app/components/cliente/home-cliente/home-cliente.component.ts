import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../data-models/cliente.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})
export class HomeClienteComponent implements OnInit {

  clientes: Cliente;
  cliente: Cliente;
  displayedColumns = ['nomeCompleto', 'email', 'fixo', 'celular', 'edicao'];

  constructor(
    public clienteService: ClienteService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.getClientes()
      .subscribe(clientes => {
        this.clientes = clientes;
      });
  }

  deleteCliente(id) {
    this.clienteService.deleteCliente(id)
      .subscribe(() => {
        this.getClientes();
      });
  }
}
