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
  }
}
