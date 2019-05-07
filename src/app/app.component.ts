import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Planificador de finales';

	constructor(private http: HttpClient, private router: Router) {
    }

}
