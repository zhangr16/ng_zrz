import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from "axios"

@Component({
  selector: 'app-requester',
  templateUrl: './requester.component.html',
  styleUrls: ['./requester.component.scss']
})
export class RequesterComponent implements OnInit {

  constructor(public http:HttpClient) {}

  public menuData:any[] = []
  private getApi = "http://a.itying.com/api/productlist";
  private postApi = "http://submission.husicong.cn/api/home/customer/login"
  private headers:any = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  ngOnInit() {
  }

  getData() {
    this.http.get(this.getApi).subscribe((res:any) => {
      console.log(res)
      this.menuData = res.result
    })
  }
  async postData() {
    let res1 = this.http.post(this.postApi, {
      account_name: 'andy',
      password: '1231231'
    }, this.headers).subscribe((res:any) => {
      console.log(res)
      return res
    })
    console.log(res1)
  }
  jsonpData() {
    this.http.jsonp(this.getApi, 'callback').subscribe((res:any) => {
      console.log(res)
    })
  }

  async axiosGet() {
    let res = await axios.get(this.getApi)
    console.log(res.data)
  }
  async axiosPost() {
    let res = await axios.post(this.postApi, {
      account_name: 'postaxios',
      password: '6666'
    })
    console.log(res)
  }
  
}
