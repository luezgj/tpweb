import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.scss']
})
export class CarreraComponent implements OnInit {

	carreraForm: FormGroup;
	subjects: FormArray;
	subjectsVisible: boolean= false;

	constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
  	this.carreraForm = this.formBuilder.group({
	    nombre: '',
	    subjects: this.formBuilder.array([])
 		});
  }

  generateSubjectsInput(cantidad: number){
  	this.subjects = this.carreraForm.get('subjects') as FormArray;
  	for (var _i = 0; _i < cantidad; _i++){ 
  		this.subjects.push(new FormControl);
  	}
  	this.subjectsVisible= true;
  }

  add(nombre: string){
  	this.subjectsVisible= false;
  }


}
