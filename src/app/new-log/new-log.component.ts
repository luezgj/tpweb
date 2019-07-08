import { Component, OnInit, ViewChild } from '@angular/core';
import { MesasComponent } from '../mesas/mesas.component';
import { UserCarrerasComponent } from '../user-carreras/user-carreras.component';

@Component({
  selector: 'app-new-log',
  templateUrl: './new-log.component.html',
  styleUrls: ['./new-log.component.scss']
})
export class NewLogComponent implements OnInit {
  @ViewChild(MesasComponent/*, {static: false}*/)
  private mesas: MesasComponent;

  @ViewChild(UserCarrerasComponent/*, {static: false}*/)
  private carreras: UserCarrerasComponent;

  constructor() { }

  ngOnInit() {
  }

  generateLog() : void {
    console.log(this.mesas.selectedMesa);
    console.log(this.mesas.selectedMesa);
    console.log(this.mesas.selectedMesa);
    //let newLog = new Log(this.tokenService.getUsername(), this.mesa.nombre, materia, this.carrera.nombre,
    //                'Pendiente', new Date());
    //this.logService.createLog(newLog);
  }

}
