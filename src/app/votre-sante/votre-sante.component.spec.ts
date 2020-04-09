import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotreSanteComponent } from './votre-sante.component';

describe('VotreSanteComponent', () => {
  let component: VotreSanteComponent;
  let fixture: ComponentFixture<VotreSanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotreSanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotreSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
