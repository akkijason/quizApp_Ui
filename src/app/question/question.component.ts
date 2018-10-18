import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question = {};

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.questionSelected.subscribe(question => this.question = question);
  }

  post(question) {
    console.log(`post is ${question}`);
    this._api.postQuestion(question);
  }

}
