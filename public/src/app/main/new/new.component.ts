import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { TriviaService } from "./../../trivia.service"
import { Question } from "./../../question"

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  question: Question
  constructor(private trivia_service: TriviaService, private router: Router) { }

  ngOnInit() {
    this.question = new Question
  }

  add_question() {
    this.trivia_service.add(this.question)
      .then(() => this.router.navigate(["/home", "list"]))
      .catch(err => console.log(err))
  }

}
