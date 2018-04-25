import { Component, OnInit } from '@angular/core';

import { ManutencaoService } from '../manutencao.service';
import { Manutencao } from '../manutencao';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { VeiculoService } from '../../veiculo/veiculo.service';
import { Veiculo } from '../../veiculo/veiculo';

import { DatepickerOptions } from 'ng2-datepicker';
import * as ptLocale from 'date-fns/locale/pt';

@Component({
  selector: 'app-add-manutencao',
  templateUrl: './add-manutencao.component.html',
  styleUrls: ['./add-manutencao.component.css']
})
export class AddManutencaoComponent implements OnInit {

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
    public manutencaoService: ManutencaoService,
    public route:ActivatedRoute,
    public router:Router,
    public veiculoService: VeiculoService
  ) { }

  ngOnInit() {
    this.getVeiculos();
    this.date = new Date();
  }

  veiculos: Veiculo;
  veiculo: any;
  manutencao = new Manutencao();

  //obter lista de veiculos
  getVeiculos() {
    this.veiculoService.getVeiculos()
      .subscribe(veiculos => {
        this.veiculos = veiculos;
      })
  }  

  //retornar para a view principal de aluguel
  goBack(){
    this.router.navigate(['/veiculo']);
  }

}