import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../../../services/fornecedor.service';
import { Fornecedor } from '../../../data-models/fornecedor.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-servico',
  templateUrl: './show-servico.component.html',
  styleUrls: ['./show-servico.component.css']
})
export class ShowServicoComponent implements OnInit {

  model = new Fornecedor();

  constructor(
    public fornecedorService: FornecedorService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getFornecedor();
  }

  getFornecedor() {
    const id = this.route.snapshot.params['id'];
    this.fornecedorService.getFornecedor(id)
      .subscribe(fornecedor => {
        this.model = fornecedor;
      });
  }

  goBack() {
    this.router.navigate(['/servico']);
  }
}
