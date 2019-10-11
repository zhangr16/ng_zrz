import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// 引入服务
import { StorageService } from '../../services/storage.service';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public historys:any = []
  
  constructor(public storage:StorageService, public request:RequestService) {
    
  }
  @Input() msg:any
  @Input() run:any

  @Output() private outer = new EventEmitter()

  ngOnInit() {
    let aa:any = this.storage.get('searchList')
    if(aa) this.historys = this.storage.get('searchList')

    let _data:any = this.request.getAsyncData()
    console.log(_data)
  }

  add() {
    if(this.historys.indexOf(this.msg) == -1) {
      this.historys.push(this.msg)
      this.storage.set('searchList', this.historys)
    }
    this.msg = ''
  }
  delete(i) {
    this.historys.splice(i, 1)
    this.storage.set('searchList', this.historys)
  }
  sendParent() {
    this.outer.emit('sons data')
  }
}
