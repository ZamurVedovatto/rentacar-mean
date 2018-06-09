import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../../../../data-models/veiculo.model';
import { VeiculoService } from '../../../../services/veiculo.service';
import { Fornecedor } from '../../../../data-models/fornecedor.model';
import { FornecedorService } from '../../../../services/fornecedor.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-manutencao',
  templateUrl: './add-manutencao.component.html',
  styleUrls: ['./add-manutencao.component.css']
})
export class AddManutencaoComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  model = new Veiculo();
  fornecedores: Fornecedor;
  dataEntrada: Date;
  idOficina;
  descricao;
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
        console.log(this.fornecedores);
      });
  }

  addManutencao() {
    const manutencao = {
      'periodo': {
        'inicio': this.dataEntrada
      },
      'idOficina': this.idOficina,
      'descricao': this.descricao,
      'valorFinal': this.valorFinal
    };

    this.model.manutencao = manutencao;
    this.updateVeiculo();
  }

  goBack() {
    this.router.navigate(['/veiculo/show/' + this.id]);
  }
}
