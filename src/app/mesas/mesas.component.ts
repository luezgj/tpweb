import { Component, OnInit } from '@angular/core';
import { Mesa } from '../model/mesa';
import { MesaService } from '../services/mesa.service';


@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss']
})
export class MesasComponent implements OnInit {
  mesas: Mesa[];
  @Output() mesaLogAdd = new EventEmitter<Mesa>();

  constructor(private mesaService: MesaService) { }

  ngOnInit() {
    this.getMesas()
  }

  getMesas() : void {
    this.mesaService.getMesas().subscribe(mesas => this.mesas = mesas);
  }

  inscribirseMesa(addLogMesa: Mesa){
    this.mesaLogAdd.emit(addLogMesa);
  }

}