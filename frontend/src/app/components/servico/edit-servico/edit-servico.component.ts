import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../../../services/fornecedor.service';
import { Fornecedor } from '../../../data-models/fornecedor.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-servico',
  templateUrl: './edit-servico.component.html',
  styleUrls: ['./edit-servico.component.css']
})
export class EditServicoComponent implements OnInit {

  model = new Fornecedor();
  id = this.route.snapshot.params['id'];

  constructor(
    public fornecedorService: FornecedorService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getFornecedor();
  }

  getFornecedor() {
    this.fornecedorService.getFornecedor(this.id)
      .subscribe(cliente => {
        this.model = cliente;
      });
  }

  update() {
    this.fornecedorService.updateFornecedor(this.id, this.model)
      .subscribe(() => {
        this.goBack();
      });
  }

  goBack() {
    this.router.navigate(['/servico/show/' + this.id]);
  }
}
