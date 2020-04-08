import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DitesNousComponent } from './dites-nous.component';

describe('DitesNousComponent', () => {
  let component: DitesNousComponent;
  let fixture: ComponentFixture<DitesNousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DitesNousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DitesNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
