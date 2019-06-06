import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { Carrera } from '../../model/carrera';
import { CarreraService } from '../../services/carrera.service';


@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.scss']
})
export class CarreraComponent implements OnInit {
  @Input() carrera: Carrera;
  isEdit: boolean;
  error: boolean;
  submitting: boolean;
  submitBtnText: string;

	carreraForm: FormGroup;
	subjects: FormArray;

  newCarrera: Carrera;

	constructor(private formBuilder: FormBuilder, private carreraService: CarreraService) {}

  ngOnInit() {
    this.isEdit = !!this.carrera;
    this.submitBtnText = this.isEdit ? 'Modificar carrera' : 'Crear carrera';

    this.newCarrera = this._setNewCarrera();

    this._buildForm();
  }

  private _setNewCarrera() {
    if (!this.isEdit) {
      return new Carrera(null, []);
    } else {
      return new Carrera(
        this.carrera.nombre,
        this.carrera.materias,
      );
    }
  }

  private _buildForm() {
    this.carreraForm = this.formBuilder.group({
      nombre: [this.newCarrera.nombre, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]],
      cantidadMaterias: 0,
      subjects: this.formBuilder.array(this.newCarrera.materias)
    });
  }

  addSubjects(cantidad: number){
  	this.subjects = this.carreraForm.get('subjects') as FormArray;
  	for (var _i = 0; _i < cantidad; _i++){ 
  		this.subjects.push(new FormControl());
  	}
  }

  add(submitform: FormGroup){
    let submitCarrera=new Carrera(
      submitform.get('nombre').value,
      submitform.get('subjects').value
      );


    if (!this.isEdit) {
      console.log(submitCarrera);
      this.carreraService.addCarrera(submitCarrera).subscribe(carrera => console.log('Carrera agregada'+ carrera.nombre));
    } else {
      this.carreraService.modifyCarrera(submitCarrera).subscribe(message => console.log(message));
    }
  }

  deleteSubject(index: number){
    this.subjects = this.carreraForm.get('subjects') as FormArray;
    this.subjects.removeAt(index);
  }

  ereaseForm(){
    
  }


}
