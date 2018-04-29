import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  spaceScreens: Array<any>; 

  constructor(private http:Http){
  }

  ngOnInit() {
    this.http.get('./assets/data.json')
    .map(response => response.json().screenshots)
    .subscribe(res=> this.spaceScreens = res);
  }

  likeMe(i){
    if (this.spaceScreens[i].liked == 0)
      this.spaceScreens[i].liked = 1;
    else
      this.spaceScreens[i].liked = 0;
  }

  deleteMe(i){
    this.spaceScreens.splice(i,1);
  }

}
