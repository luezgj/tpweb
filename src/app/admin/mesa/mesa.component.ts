import { Component, OnInit } from '@angular/core';

import { MesaFormComponent } from './mesa-form/mesa-form.component';
import { MesasComponent } from '../../mesas/mesas.component';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})
export class MesaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
