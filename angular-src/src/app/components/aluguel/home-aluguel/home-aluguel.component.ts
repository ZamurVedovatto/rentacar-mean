import { Component, OnInit } from '@angular/core';

import { AluguelService } from '../aluguel.service';
import { Aluguel } from '../aluguel';
import { ClienteService } from '../../cliente/cliente.service';
import { Cliente } from '../../cliente/cliente';
import { VeiculoService } from '../../veiculo/veiculo.service';
import { Veiculo } from '../../veiculo/veiculo';

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home-aluguel',
  templateUrl: './home-aluguel.component.html',
  styleUrls: ['./home-aluguel.component.css']
})
export class HomeAluguelComponent implements OnInit {

  constructor(
    public aluguelService: AluguelService,
    public clienteService: ClienteService,
    public veiculoService: VeiculoService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.getAlugueis();
    this.getClientes();
  }

  aluguel: Aluguel;
  alugueis: Aluguel;
  cliente: Cliente;
  clientes: Cliente;
  veiculo: Veiculo;

  getCliente(idCliente){
    let id = idCliente;
    this.clienteService.getCliente(id)
      .subscribe(cliente => {
        this.cliente = cliente;
      })
  }

  getClientes() {
    this.clienteService.getClientes()
      .subscribe(clientes => {
        this.clientes = clientes;
      })
  }

  getAlugueis() {
    this.aluguelService.getAlugueis()
      .subscribe(alugueis => {
        this.alugueis = alugueis;
      })
  }

  getAluguel(id){
    this.aluguelService.getAluguel(id)
      .subscribe(aluguel => {
        this.aluguel = aluguel;
      })
  }

  finalizarAluguel(id){

    this.getAluguel(id);    
    
    this.aluguel.dataEntrega = new Date();

    this.aluguelService.updateAluguel(id, this.aluguel)
      .subscribe(()=> {
        this.getAlugueis();
      })
    
  }

  deleteAluguel(id){
    this.aluguelService.deleteAluguel(id)
      .subscribe(()=> {
        this.getAlugueis();
      })
  }
}
