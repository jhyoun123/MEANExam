import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import "rxjs"

import { Question } from "./question"
import { Test } from "./test"
@Injectable()
export class TriviaService {

  constructor(private http: Http) { }
  
  login(user){
    return this.http.post("/login", user) 
            .map(data => data.json())
            .toPromise()
  }

  add(new_question: Question) {
    return this.http.post("/add_question", new_question) 
            .map(data => data.json())
            .toPromise()
  
  }

  make_test() {
    return this.http.get("/make_test") 
            .map(data => data.json())
            .toPromise()
  }

  check_logged_in() {
    return this.http.get("/get_logged_in") 
            .map(data => data.json())
            .toPromise()
  }

  logout() {
    return this.http.get("/logout") 
            .map(data => data.json())
            .toPromise()
  }

  add_test(test: Test) {
    return this.http.post("/add_test", test) 
            .map(data => data.json())
            .toPromise()
  }

  get_tests() {
    return this.http.get("/get_tests") 
            .map(data => data.json())
            .toPromise()
  }
          
}
