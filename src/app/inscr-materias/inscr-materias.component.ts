import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Carrera } from '../model/carrera';
import { Log } from '../model/log';
import { CarreraService } from '../services/carrera.service';
import { LogService } from '../service/log.service';

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
    private ruta : ActivatedRoute,
    private location : Location
  ) { }

  ngOnInit() {
    this.getMaterias()
  }

  getMaterias() : void {
    this.carrera.subscribe(materias => this.materias = materias)
  }

  generateLog(materia: string) : Log {
    //PENDIENTE*********************************
    newLog = new Log(123, 'usuario', mesa.nombre, materia, carrera.nombre,
                    'Pendiente', new Date())
    this.logService.createLog(newLog)
  }

}
