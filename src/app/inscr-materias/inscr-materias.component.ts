import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Carrera } from '../model/carrera';
import { Log } from '../model/log';
import { Mesa } from '../model/mesa';
import { CarreraService } from '../services/carrera.service';
import { LogService } from '../services/log.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-inscr-materias',
  templateUrl: './inscr-materias.component.html',
  styleUrls: ['./inscr-materias.component.scss']
})
export class InscrMateriasComponent implements OnInit {
  @Input('carrera') carrera: Carrera;
  materias: string[];
  selectedMateria: string;

  constructor(
    private logService: LogService,
    private carreraService: CarreraService,
    private tokenService: TokenStorageService,
    private ruta : ActivatedRoute,
    private location : Location
  ) { }

  ngOnInit() {
    this.getMaterias()
  }

  getMaterias() : void {
    if(this.carrera!=null){
      this.materias = this.carrera.materias;
    }
  }

  selectMateria(newSelectedMateria): void{
    this.selectedMateria=newSelectedMateria;
  }

}
