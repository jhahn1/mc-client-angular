import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { AuthService } from '../auth/auth.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  isChallenge = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private http: HttpClient) {
   }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      stacheCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      amountCtrl: ['', Validators.required]
    });
  }

  submitChallenge(): void {
    console.log('Values = ', this.firstFormGroup.value, this.secondFormGroup.value, this.thirdFormGroup.value);
    this.http.post('localhost:8080/challenge/create', 'nonsense', httpOptions).pipe(
      tap(_ => console.log(`shit happened`)),
      catchError(this.handleError(`somethings super wrong`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
