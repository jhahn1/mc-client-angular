import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../auth/auth.service';

interface IApiResponse {
  message: string;
}

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  API_URL: 'localhost:8080/challenge';
  message: string;
  isChallenge = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
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
    this.message = '';
    this.http
      .get<IApiResponse>(`${this.API_URL}/private`, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
      })
      .subscribe(
        data => this.message = data.message,
        error => this.message = error
      );
  }

}
