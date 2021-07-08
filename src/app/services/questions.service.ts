import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {


  constructor(public http: HttpClient) { }

  getDetails(){
    return this.http.get('https://localhost:44378/api/UserDetails/lwandod');
  }

  createVisitor(){
      }
}
