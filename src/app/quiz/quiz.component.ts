import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz = {};
  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.quizSelected.subscribe(quiz => this.quiz = quiz);
  }

}
