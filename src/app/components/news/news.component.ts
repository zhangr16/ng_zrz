import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  /**
   * pulic 公有  类内类外
   * protected 保护  当前类跟子类
   * private 私有  当前类
   */
  public title = "我爱北京天安门";
  msg:string="我不是拉斯维加斯人,点我点我点我"
  protected zrz = 'protected'
  private:object = {
    a: 1,
    b: 2
  }
  public ngArr:Array<number> = [1, 2, 3, 5]
  private userList:any[] = [{
    user: 'lsx',
    age: 11,
    checked: false
  },{
    user: 'zrz',
    age: 23,
    checked: false
  },{
    user: 'sda',
    age: 32,
    checked: false
  }]
  @ViewChild('mybox', { static: false }) mybox;
  @ViewChild('home', { static: false }) home;

  constructor() {}

  ngOnInit() {}
  
  ngAfterViewInit(): void {
    this.mybox.nativeElement.style.color = 'red'
  }
  clickmsg() {
    this.home.__proto__.gg()
  }
}
