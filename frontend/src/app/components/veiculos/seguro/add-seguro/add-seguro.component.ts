import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../../../../data-models/veiculo.model';
import { VeiculoService } from '../../../../services/veiculo.service';
import { Fornecedor } from '../../../../data-models/fornecedor.model';
import { FornecedorService } from '../../../../services/fornecedor.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-seguro',
  templateUrl: './add-seguro.component.html',
  styleUrls: ['./add-seguro.component.css']
})
export class AddSeguroComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  model = new Veiculo();
  fornecedores: Fornecedor;
  dataEntrada: Date;
  dataFim: Date;
  idSeguradora;
  valorFinal;

  constructor(
    public veiculoService: VeiculoService,
    public fornecedorService: FornecedorService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getVeiculo();
    this.getFornecedores();
  }

  getVeiculo() {
    this.veiculoService.getVeiculo(this.id)
      .subscribe(veiculo => {
        this.model = veiculo;
      });
  }

  updateVeiculo() {
    this.veiculoService.updateVeiculo(this.id, this.model)
      .subscribe(() => this.goBack());
  }

  getFornecedores() {
    this.fornecedorService.getFornecedores()
      .subscribe(fornecedores => {
        this.fornecedores = fornecedores;
      });
  }

  addSeguro() {
    const seguro = {
      'periodo': {
        'inicio': this.dataEntrada
      },
      'idSeguradora': this.idSeguradora,
      'valorFinal': this.valorFinal
    };

    this.model.seguro = seguro;
    this.updateVeiculo();
  }

  goBack() {
    this.router.navigate(['/veiculo/show/' + this.id]);
  }
}
