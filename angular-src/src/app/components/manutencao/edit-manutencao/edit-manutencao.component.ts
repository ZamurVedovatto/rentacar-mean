import { Component, OnInit } from '@angular/core';

import { ManutencaoService } from '../manutencao.service';
import { Manutencao } from '../manutencao';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DatepickerOptions } from 'ng2-datepicker';
import * as ptLocale from 'date-fns/locale/pt';

@Component({
  selector: 'app-edit-manutencao',
  templateUrl: './edit-manutencao.component.html',
  styleUrls: ['./edit-manutencao.component.css']
})
export class EditManutencaoComponent implements OnInit {

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
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.date = new Date();
  }

  manutencao = new Manutencao();
  id = this.route.snapshot.params['id'];

  getManutencao(){
    this.manutencaoService.getManutencao(this.id)
      .subscribe(manutencao => {
        this.manutencao = manutencao;
      })
  }
  
  updateManutencao(){
    this.manutencaoService.updateManutencao(this.id, this.manutencao)
      .subscribe(()=> this.goBack())
  }


  goBack(){
    this.router.navigate(['/veiculo']);
  }
}
