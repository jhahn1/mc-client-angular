import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input('profile') profile: string;

  constructor(public auth: AuthService) {
    // auth.handleAuthentication();
  }

  // ngOnInit() {
  //   if (this.auth.userProfile) {
  //     this.profile = this.auth.userProfile;
  //   } else {
  //     this.auth.getProfile((err, profile) => {
  //       this.profile = profile;
  //     });
  //   }
  // }

}
