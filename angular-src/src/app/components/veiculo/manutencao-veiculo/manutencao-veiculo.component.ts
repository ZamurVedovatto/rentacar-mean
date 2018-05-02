import { Component, OnInit } from '@angular/core';

import { VeiculoService } from '../veiculo.service';
import { Veiculo } from '../veiculo';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DatepickerOptions } from 'ng2-datepicker';
import * as ptLocale from 'date-fns/locale/pt';

@Component({
  selector: 'app-manutencao-veiculo',
  templateUrl: './manutencao-veiculo.component.html',
  styleUrls: ['./manutencao-veiculo.component.css']
})
export class ManutencaoVeiculoComponent implements OnInit {

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

  model = new Veiculo();
  id = this.route.snapshot.params['id'];

  dataInicio = Date();
  dataRetirada = Date();

  manutencao = {
    dataInicio: Date(),
    dataRetirada: Date()
  };

  constructor(
    public veiculoService: VeiculoService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getVeiculo();
    this.date = new Date();
  }

  getVeiculo() {
    this.veiculoService.getVeiculo(this.id)
      .subscribe(veiculo => {
        this.model = veiculo;
      });
  }

  updateVeiculo() {
    this.manutencao.dataInicio = this.dataInicio;
    this.manutencao.dataRetirada = this.dataRetirada;
    this.model.manutencao.push(this.manutencao);

    this.veiculoService.updateVeiculo(this.id, this.model)
      .subscribe(() => this.goBack());
  }

  goBack() {
    this.router.navigate(['/veiculo']);
  }
}
