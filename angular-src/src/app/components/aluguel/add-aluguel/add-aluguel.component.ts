import { Component, OnInit } from '@angular/core';

import { AluguelService } from '../aluguel.service';
import { Aluguel } from '../aluguel';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ClienteService } from '../../cliente/cliente.service';
import { Cliente } from '../../cliente/cliente';
import { VeiculoService } from '../../veiculo/veiculo.service';
import { Veiculo } from '../../veiculo/veiculo';

import { DatepickerOptions } from 'ng2-datepicker';
import * as ptLocale from 'date-fns/locale/pt';

@Component({
  selector: 'app-add-aluguel',
  templateUrl: './add-aluguel.component.html',
  styleUrls: ['./add-aluguel.component.css']
})
export class AddAluguelComponent implements OnInit {

  date: Date;
  options: DatepickerOptions = {
    minYear: 2018,
    maxYear: 2022,
    displayFormat: 'D [de] MMMM [de] YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    minDate: new Date(Date.now()), // Minimal selectable date
    barTitleIfEmpty: 'Clique para selecionar',
    locale: ptLocale
  };

  constructor(
    public aluguelService: AluguelService,
    public route:ActivatedRoute,
    public router:Router,
    public clienteService: ClienteService,
    public veiculoService: VeiculoService,
  ) { }

  ngOnInit() {
    this.getClientes();
    this.getVeiculos();
    this.date = new Date();
  }

  veiculos: Veiculo;
  clientes: Cliente;
  aluguel = new Aluguel();

  getClientes() {
    this.clienteService.getClientes()
      .subscribe(clientes => {
        this.clientes = clientes;
      })
  }

  getVeiculos() {
    this.veiculoService.getVeiculos()
      .subscribe(veiculos => {
        this.veiculos = veiculos;
      })
  }
  
  addAluguel(){
   
    this.aluguelService.addAluguel(this.aluguel)
      .subscribe(()=> this.goBack())
  }

  goBack(){
    this.router.navigate(['/aluguel']);
  }
  
}