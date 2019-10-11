import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor() { }

  public async getAsyncData() {
    let res = await setTimeout(() => {
      return 'gssadsadas'
    }, 1000);
    return res
  }
}
