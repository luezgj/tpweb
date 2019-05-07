import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  	
	constructor( private token: TokenStorageService, public router: Router) {
	
	}

	ngOnInit() {
  	}

	logOut() {
		this.token.signOut();
		this.router.navigate(['/login']);
	}
}
