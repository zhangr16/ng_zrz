import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router"
@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent implements OnInit {

  constructor(public actRoute:ActivatedRoute,public Router:Router) { }
  public _index:number

  ngOnInit() {
    this.actRoute.params.subscribe(data => {
      console.log(data)
      this._index = data.aid
    })
  }
  gotoSearch(i) {
    console.log(i)
    let navi: NavigationExtras = {
      queryParams: { 'id': i }
    }
    this.Router.navigate(['/search', i], navi)
  }
}
