import { Component, OnInit, EventEmitter } from '@angular/core';
import { Carrera } from '../../model/carrera';
import { CarreraService } from '../../services/carrera.service';
import { CarreraFormComponent } from './carrera-form/carrera-form.component';


@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.scss']
})
export class CarreraComponent implements OnInit {
  carreras: Carrera[];
  selectedCarrera: String;

  constructor(
    private carreraService: CarreraService
  ) {}

  ngOnInit() {
    this.getAll()
  }

  getAll() : void{
    this.carreraService.getCarreras().subscribe(carreras => this.carreras = carreras);
  }

  carreraAdded(carrera : Carrera): void{
    this.carreras.push(carrera);
  }

  carreraUpdated(carrera : Carrera): void{
    this.carreras[this.carreras.findIndex(c => c.nombre == carrera.nombre)] = carrera;
  }

  updateCarrera(carrera : Carrera): void {
    this.selectedCarrera=carrera.nombre;
  }

  delCarrera(nombre : String): void {

    this.carreraService.deleteCarrera(nombre);
  }
}
