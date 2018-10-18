import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {

  private _selectedQuestion = new Subject<any>();
  questionSelected = this._selectedQuestion.asObservable();

  private _selectedQuiz = new Subject<any>();
  quizSelected = this._selectedQuiz.asObservable();

  constructor(private _http: HttpClient) {}

  getQuestions() {
    return this._http.get('http://localhost:5000/api/questions');
  }

  postQuestion(question) {
    this._http
      .post('http://localhost:5000/api/questions', question)
      .subscribe(resp => {
        console.log(`response is ${resp}`);
      });
  }

  putQuestion(question) {
    this._http
      .put(`http://localhost:5000/api/questions/${question.id}`, question)
      .subscribe(resp => {
        console.log(resp);
      });
  }

  selectQuestion(question) {
    this._selectedQuestion.next(question);
  }

  getQuizzes() {
    return this._http.get('http://localhost:5000/api/quizzes');
  }

  postQuiz(quiz) {
    if (Object.keys(quiz).length !== 0) {
        this._http
        .post('http://localhost:5000/api/quizzes', quiz)
        .subscribe(resp => {
          console.log(`response is ${resp}`);
        });
    }
  }

  putQuiz(quiz) {
    this._http
      .put(`http://localhost:5000/api/quizzes/${quiz.id}`, quiz)
      .subscribe(resp => {
        console.log(resp);
      });
  }

  selectQuiz(quiz) {
    this._selectedQuiz.next(quiz);
  }
}
