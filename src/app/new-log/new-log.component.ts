import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-log',
  templateUrl: './new-log.component.html',
  styleUrls: ['./new-log.component.scss']
})
export class NewLogComponent implements OnInit {
  canSubmit: boolean;

  constructor() { }

  ngOnInit() {
  }

  generateLog(materia: string) : void {
    let newLog = new Log(this.tokenService.getUsername(), this.mesa.nombre, materia, this.carrera.nombre,
                    'Pendiente', new Date());
    this.logService.createLog(newLog);
  }

}
