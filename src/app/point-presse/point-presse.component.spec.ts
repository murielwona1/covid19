import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointPresseComponent } from './point-presse.component';

describe('PointPresseComponent', () => {
  let component: PointPresseComponent;
  let fixture: ComponentFixture<PointPresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointPresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointPresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
