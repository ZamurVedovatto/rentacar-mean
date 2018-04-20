import { Component, OnInit } from '@angular/core';
import { SeguroService } from '../seguro.service';
import { Seguro } from '../seguro';


@Component({
  selector: 'app-home-seguro',
  templateUrl: './home-seguro.component.html',
  styleUrls: ['./home-seguro.component.css']
})
export class HomeSeguroComponent implements OnInit {

  constructor(
    public seguroService: SeguroService
  ) { }

  ngOnInit() {
    this.getSeguros();
  }

  seguros: Seguro;

  getSeguros() {
    this.seguroService.getSeguros()
      .subscribe(seguros => {
        this.seguros = seguros;
      })
  }

  deleteSeguro(id){
    this.seguroService.deleteSeguro(id)
      .subscribe(()=> {
        this.getSeguros();
      })
  }

  

}
