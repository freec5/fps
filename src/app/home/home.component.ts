import { Component, OnInit } from '@angular/core';
//import { } from '';

//import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data;
  loginData = {
    'email': '',
    'password': ''
  };

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    //this.apiService.getApi();
  }
  

  getApi(): void {
    this.apiService.getApi()
      .subscribe(data => this.data = data);
    console.log(this.data);
  }

  postLogin(loginData): void {
    this.apiService.postLogin(loginData);
   // console.log(loginData);
  }



}
