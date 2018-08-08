import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';
//import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


// import { Model } from '';

@Injectable()
export class ApiService {

constructor(
  private http: HttpClient) { }

  private apiUrl = 'api';

  getApi() {
    return this.http.get('/api/get');
  }

  postLogin(loginData) {
    return this.http.post('/api/login', loginData).subscribe(status=> console.log(JSON.stringify(status)));
//    return this.http.post('/api/login', loginData).subscribe(() => console.log(loginData));

  }

}
