import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {
  public isHide:boolean = false

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.isHide = true
  }
}
