import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { Carrera } from '../../model/carrera';
import { CarreraService } from '../../services/carrera.service';


@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.scss']
})
export class CarreraComponent implements OnInit {

	carreraForm: FormGroup;
	subjects: FormArray;

	constructor(private formBuilder: FormBuilder, private carreraService: CarreraService) {}

  ngOnInit() {
  	this.carreraForm = this.formBuilder.group({
	    nombre: '',
	    cantidadMaterias: 0,
	    subjects: this.formBuilder.array([])
 		});
  }

  generateSubjectsInput(cantidad: number){
  	this.subjects = this.carreraForm.get('subjects') as FormArray;
  	for (var _i = 0; _i < cantidad; _i++){ 
  		this.subjects.push(new FormControl);
  	}
  }

  add(submitform: FormGroup){
    newCarrera: new Carrera();
    carreraService.addCarrera(newCarrera).suscribe(carrera => console.log('Carrera agregada'+ carrera.nombre));
  }

  ereaseForm(){
    
  }


}
