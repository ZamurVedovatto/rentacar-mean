import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  constructor(
    public clienteService: ClienteService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.getCliente();
  }

  model = new Cliente();
  id = this.route.snapshot.params['id'];


  getCliente(){
    this.clienteService.getCliente(this.id)
      .subscribe(cliente => {
        this.model = cliente;
      })
  }
  
  updateCliente(){
    this.clienteService.updateCliente(this.id, this.model)
      .subscribe(()=> this.goBack())
  }


  goBack(){
    this.router.navigate(['/cliente']);
  }
}
