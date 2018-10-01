import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  question = {};
  questions;
  
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this._apiService.getQuestions().subscribe(res => {
      this.questions = res;
    })
  }

  post(question) {
    console.log(`post is ${question}`);
    this._apiService.postQuestion(question);
  }

}
