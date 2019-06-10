import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMesaComponent } from './new-mesa.component';

describe('NewMesaComponent', () => {
  let component: NewMesaComponent;
  let fixture: ComponentFixture<NewMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
