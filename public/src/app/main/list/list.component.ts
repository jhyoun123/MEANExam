import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { Test } from "./../../test"
import { TriviaService } from "./../../trivia.service"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  all_tests: Array<Test>
  user: {}
  test_complete: boolean
  constructor(private trivia_service: TriviaService, private router: Router) { }

  ngOnInit() {
    this.trivia_service.get_tests()
      .then(tests => this.all_tests = tests)
      .catch(err => console.log(err))

    this.trivia_service.check_logged_in()
      .then(user => this.user = user)
      .catch((err) => console.log(err))
    
  }

}
