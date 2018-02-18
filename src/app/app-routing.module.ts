import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengeComponent } from './challenge/challenge.component';


const routes: Routes = [
  { path: '', redirectTo: '/challenge', pathMatch: 'full' },
  { path: 'challenge', component: ChallengeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
