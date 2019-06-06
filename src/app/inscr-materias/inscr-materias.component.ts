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
  @Input() carrera: Carrera;
  @Input('mesa') mesa: Mesa;
  materias: string[];

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
    this.materias = this.carrera.materias;
  }

  generateLog(materia: string) : void {
    let newLog = new Log(this.tokenService.getUsername(), this.mesa.nombre, materia, this.carrera.nombre,
                    'Pendiente', new Date());
    this.logService.createLog(newLog);
  }

}
