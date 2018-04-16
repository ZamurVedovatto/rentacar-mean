import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo/veiculo.service';
import { Veiculo } from '../veiculo/veiculo';
import { AluguelService } from '../aluguel/aluguel.service';
import { Aluguel } from '../aluguel/aluguel';
import { ClienteService } from '../cliente/cliente.service';
import { Cliente } from '../cliente/cliente';
import { AuthService } from '../usuario/auth.service'; //injetar como dependency no construtor

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  
})
export class HomeComponent implements OnInit {

  constructor(
    public veiculoService: VeiculoService,
    public aluguelService: AluguelService,
    public clienteService: ClienteService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getVeiculos();
    this.getAlugueis();
    this.getClientes();
  }

  veiculos: Veiculo;
  alugueis: Aluguel;
  clientes: Cliente;

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

  getVeiculos() {
    this.veiculoService.getVeiculos()
      .subscribe(veiculos => {
        this.veiculos = veiculos;
      })
  }

}
