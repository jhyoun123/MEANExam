import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { TriviaService } from "./../trivia.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {name: ""}
  constructor(private trivia_service: TriviaService, private router: Router) { }

  ngOnInit() {
    this.user = {name: ""}
    this.trivia_service.logout()
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  on_submit() {
    this.trivia_service.login(this.user)
      .then(() => this.router.navigate(["/home", "list"]))
      .catch(err => console.log(err))
  }


}
