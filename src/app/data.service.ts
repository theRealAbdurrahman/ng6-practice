import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseurl: string = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.baseurl}/users`)
  }
  getUserDetail(id) {
    return this.http.get(`${this.baseurl}/users/${id}`)

  }
  getPosts() {
    return this.http.get(`${this.baseurl}/posts`)
  }

}
