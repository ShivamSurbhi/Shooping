import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  constructor(private http: HttpClient) {}

  getReq(url: any) {
     const headers = new HttpHeaders().set(
       'token',
       'testToken'
     );

    return this.http.get(`${url}`, { headers });
  }

  postReq(url: any, data: any) {
    return this.http.post(`${url}`, data);
  }

  putReq(url: any, data: any) {
    return this.http.put(`${url}`, data);
  }

  deleteReq(url: any, id: any) {
    return this.http.delete(`${url}/${id}`);
  }
}
