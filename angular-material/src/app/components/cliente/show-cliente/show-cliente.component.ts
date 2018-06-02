import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../data-models/cliente.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-cliente',
  templateUrl: './show-cliente.component.html',
  styleUrls: ['./show-cliente.component.css']
})
export class ShowClienteComponent implements OnInit {

  cliente: Cliente;

  constructor(
    public clienteService: ClienteService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getCliente();
  }

  getCliente() {
    const id = this.route.snapshot.params['id'];
    this.clienteService.getCliente(id)
      .subscribe(cliente => {
        this.cliente = cliente;
      });
  }

  goBack() {
    this.router.navigate(['/cliente']);
  }
}
