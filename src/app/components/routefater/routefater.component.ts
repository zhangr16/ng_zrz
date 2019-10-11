import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routefater',
  templateUrl: './routefater.component.html',
  styleUrls: ['./routefater.component.scss']
})
export class RoutefaterComponent implements OnInit {

  constructor() { }
  public items:any[] = []

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      this.items.push('这是第' + i +'条子元素')
    }
  }

}
