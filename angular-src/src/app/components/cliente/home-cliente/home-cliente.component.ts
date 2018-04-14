import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';


@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})
export class HomeClienteComponent implements OnInit {

  constructor(
    public clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.getClientes();
  }

  clientes: Cliente;

  getClientes() {
    this.clienteService.getClientes()
      .subscribe(clientes => {
        this.clientes = clientes;
      })
  }

  deleteCliente(id){
    this.clienteService.deleteCliente(id)
      .subscribe(()=> {
        this.getClientes();
      })
  }

  

}
