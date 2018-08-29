import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImagesService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://node1.christopher-freeman.com/images';

  getImages(): Observable<{}[]> {
    return this.http.get<{}[]>(this.apiUrl + '/show')
      //.subscribe(data => console.log('service grabbed http - done'));
  }


}
