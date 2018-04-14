import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  constructor(
    public clienteService: ClienteService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
  }

  model = new Cliente();
  
  addCliente(){
    this.clienteService.addCliente(this.model)
      .subscribe(()=> this.goBack())
  }

  goBack(){
    this.router.navigate(['/cliente']);
  }
  
}
