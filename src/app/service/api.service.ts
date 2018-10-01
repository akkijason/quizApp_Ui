import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiService {

    
    constructor( private _http:HttpClient ){}

    getQuestions(){
        return this._http.get('http://localhost:5000/api/questions');
    }

    postQuestion(question){
        this._http.post('http://localhost:5000/api/questions', question).subscribe(resp => {
            console.log(`response is ${resp}`);
        });
    }
}