import { Component, OnInit } from '@angular/core';

import { FornecedorService } from '../../../services/fornecedor.service';
import { Fornecedor } from '../../../data-models/fornecedor.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-servico',
  templateUrl: './add-servico.component.html',
  styleUrls: ['./add-servico.component.css']
})
export class AddServicoComponent implements OnInit {

  model = new Fornecedor();

  constructor(
    public fornecedorService: FornecedorService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
  }

  addFornecedor() {
    this.fornecedorService.addFornecedor(this.model)
      .subscribe(() => this.goBack());
  }

  goBack() {
    this.router.navigate(['/servico']);
  }

}
