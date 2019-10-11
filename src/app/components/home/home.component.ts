import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imgsrc = "https://pic1.zhimg.com/50/v2-a4f362cdd9eede8fbcf1276c7de65f60_hd.jpg"
  public score:boolean = true
  public today:any = new Date();
  
  constructor() {}

  ngOnInit() {
  }

  run() {
    this.score = !this.score
  }
  gg() {
    console.log('gggggggggggggg')
  }
  ssss(e) {
    console.log(e)
  }
}
