import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private isAdmin: boolean;
  private isLogged: boolean;

  constructor(private token: TokenStorageService, public router: Router) { }

  ngOnInit() {
    this.isAdmin=this.token.isAdmin();
    this.isLogged=this.token.isAuthenticated();
  }


  logOut() {
		this.token.signOut();
		this.router.navigate(['/login']);
	}
}
