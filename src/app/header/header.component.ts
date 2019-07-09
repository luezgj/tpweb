import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private token: TokenStorageService, public router: Router) { }

  ngOnInit() {
  }


  logOut() {
		this.token.signOut();
		this.router.navigate(['/login']);
	}
}
