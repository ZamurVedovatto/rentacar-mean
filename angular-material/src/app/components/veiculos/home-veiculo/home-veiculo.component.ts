import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../../../data-models/veiculo.model';
import { VeiculoService } from '../../../services/veiculo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home-veiculo',
  templateUrl: './home-veiculo.component.html',
  styleUrls: ['./home-veiculo.component.css']
})
export class HomeVeiculoComponent implements OnInit {


  veiculo: Veiculo;
  veiculos: Veiculo;
  displayedColumns = ['disponivel', 'modelo', 'fabrica', 'cor', 'anoFabricacao', 'valorDiaria', 'edicao'];

  constructor(
    public veiculoService: VeiculoService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getVeiculos();
  }

  disponivel(veiculo) {
    if (veiculo.aluguel) {
      return false;
    } else {
      return true;
    }
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

  getVeiculo(id) {
    this.veiculoService.getVeiculo(id)
      .subscribe(veiculo => {
        this.veiculo = veiculo;
      });
  }
}
