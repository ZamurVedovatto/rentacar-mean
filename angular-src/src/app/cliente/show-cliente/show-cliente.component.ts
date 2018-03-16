import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-cliente',
  templateUrl: './show-cliente.component.html',
  styleUrls: ['./show-cliente.component.css']
})
export class ShowClienteComponent implements OnInit {

  constructor(
    public clienteService: ClienteService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.getCliente();
  }

  cliente:Cliente;

  getCliente(){
    let id = this.route.snapshot.params['id'];
    this.clienteService.getCliente(id)
      .subscribe(cliente => {
        this.cliente = cliente;
      })
  }

  goBack(){
    this.router.navigate(['/cliente']);
  }
}
