import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../../../../data-models/veiculo.model';
import { VeiculoService } from '../../../../services/veiculo.service';
import { Fornecedor } from '../../../../data-models/fornecedor.model';
import { FornecedorService } from '../../../../services/fornecedor.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-manutencao',
  templateUrl: './edit-manutencao.component.html',
  styleUrls: ['./edit-manutencao.component.css']
})

export class EditManutencaoComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  model = new Veiculo();
  fornecedores: Fornecedor;
  fornecedor: Fornecedor;
  dataRetirada: Date;
  idFornecedor;

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
        this.getFornecedor(this.model.manutencao.idOficina);
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

  getFornecedor(id) {
    this.fornecedorService.getFornecedor(id)
      .subscribe(fornecedor => {
        this.fornecedor = fornecedor;
      });
  }

  goBack() {
    this.router.navigate(['/veiculo/show/' + this.id]);
  }
}
