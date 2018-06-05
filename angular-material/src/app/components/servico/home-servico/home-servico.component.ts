import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../../../services/fornecedor.service';
import { Fornecedor } from '../../../data-models/fornecedor.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home-servico',
  templateUrl: './home-servico.component.html',
  styleUrls: ['./home-servico.component.css']
})
export class HomeServicoComponent implements OnInit {

  models: Fornecedor;
  displayedColumns = ['tipo', 'nomeFantasia', 'email', 'fixo', 'edicao'];

  constructor(
    public fornecedorService: FornecedorService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getFornecedores();
  }

  getFornecedores() {
    this.fornecedorService.getFornecedores()
      .subscribe(fornecedores => {
        this.models = fornecedores;
      });
  }
}
