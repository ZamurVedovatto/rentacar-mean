import { Component, OnInit } from '@angular/core';
import { ManutencaoService } from '../manutencao.service';
import { Manutencao } from '../manutencao';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-manutencao',
  templateUrl: './show-manutencao.component.html',
  styleUrls: ['./show-manutencao.component.css']
})
export class ShowManutencaoComponent implements OnInit {

  constructor(
    public manutencaoService: ManutencaoService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.getManutencao();
  }

  manutencao: Manutencao;

  getManutencao(){
    let id = this.route.snapshot.params['id'];
    this.manutencaoService.getManutencao(id)
      .subscribe(manutencao => {
        this.manutencao = manutencao;
      })
  }

  goBack(){
    this.router.navigate(['/manutencao']);
  }
}
