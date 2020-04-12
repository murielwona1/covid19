import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoarderComponent } from './loarder.component';

describe('LoarderComponent', () => {
  let component: LoarderComponent;
  let fixture: ComponentFixture<LoarderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoarderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoarderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
