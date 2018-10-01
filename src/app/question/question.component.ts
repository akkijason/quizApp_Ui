import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  question = {};
  constructor(private _postService: ApiService) { }

  ngOnInit() {
  }

  post(question) {
    console.log(`post is ${question}`);
    this._postService.postQuestion(question);
  }

}
