import { Component, OnInit } from '@angular/core';
import { SeguroService } from '../seguro.service';
import { Seguro } from '../seguro';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-seguro',
  templateUrl: './show-seguro.component.html',
  styleUrls: ['./show-seguro.component.css']
})
export class ShowSeguroComponent implements OnInit {

  constructor(
    public seguroService: SeguroService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.getSeguro();
  }

  seguro: Seguro;

  getSeguro(){
    let id = this.route.snapshot.params['id'];
    this.seguroService.getSeguro(id)
      .subscribe(seguro => {
        this.seguro = seguro;
      })
  }

  goBack(){
    this.router.navigate(['/seguro']);
  }
}
