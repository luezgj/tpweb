import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Mesa } from '../model/mesa';
import { MesaService } from '../services/mesa.service';

@Component({
  selector: 'app-user-carreras',
  templateUrl: './user-carreras.component.html',
  styleUrls: ['./user-carreras.component.scss']
})
export class UserCarrerasComponent implements OnInit {
  @Input() mesa: Mesa;
  carreras: Carrera[];

  constructor(
    private carreraService: CarreraService,
    private ruta : ActivatedRoute,
    private location : Location
  ) { }

  ngOnInit() {
    this.getUserCarreras()
  }

  getUserCarreras() : void {
    this.carreraService.getUserCarreras().subscribe(carreras => this.carreras = carreras);
  }

}