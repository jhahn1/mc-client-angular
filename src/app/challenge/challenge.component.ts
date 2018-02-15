import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private _formBuilder: FormBuilder) { }

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
  }

}
