import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { Question } from "./../question"
import { Test } from "./../test"
import { TriviaService } from "./../trivia.service"
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test: Array<Question>
  user: {}
  test_scores: Test
  first: string
  second: string
  third: string
  count = 0
  constructor(private trivia_service: TriviaService, private router: Router) { }

  ngOnInit() {
    this.test_scores = new Test
    this.count = 0
    this.trivia_service.make_test()
      .then(test => this.test = test)
      .catch(err => console.log(err))

    this.trivia_service.check_logged_in()
      .then(user => this.user = user)
      .catch(() => this.router.navigate(["/login"]))
  }

  add_test() {
    console.log(this.first, this.second, this.third)
    if (this.first == "correct") {
      this.count++
    } if (this.second == "correct") {
      this.count++
    } if (this.third == "correct") {
      this.count++
    }
    this.test_scores.user = this.user.toString()
    this.test_scores.score = this.count + "/3"
    if (this.count == 0) {
      this.test_scores.percentage = "0%"
    } else if (this.count == 1) {
      this.test_scores.percentage = "33.3%"
    } else if (this.count == 2) {
      this.test_scores.percentage = "66.7%"
    } else {
      this.test_scores.percentage = "100%"
    }
    this.trivia_service.add_test(this.test_scores)
      .then(result => this.router.navigate(["/home", "list"]))
      .catch(err => console.log(err))
  }

}
