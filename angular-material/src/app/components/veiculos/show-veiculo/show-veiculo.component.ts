import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Veiculo } from '../../../data-models/veiculoModel';
import { VeiculoService } from '../../../services/veiculo.service';


@Component({
  selector: 'app-show-veiculo',
  templateUrl: './show-veiculo.component.html',
  styleUrls: ['./show-veiculo.component.css']
})
export class ShowVeiculoComponent implements OnInit {

  veiculos: Veiculo;

  displayedColumns = ['modelo', 'fabrica', 'cor', 'anoFabricacao', 'valorDiaria', 'edicao'];
  dataSource = this.getVeiculos();


  constructor(
    public veiculoService: VeiculoService
  ) { }

  ngOnInit() {
    this.getVeiculos();
    console.log(this.dataSource);
    console.log(this.veiculos);
  }

  getVeiculos() {
    this.veiculoService.getVeiculos()
      .subscribe(veiculos => {
        this.veiculos = veiculos;
      });
  }

  deleteVeiculo(id) {
    this.veiculoService.deleteVeiculo(id)
      .subscribe(() => {
        this.getVeiculos();
      });
  }
}
