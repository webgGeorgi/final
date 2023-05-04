import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDEComponent } from './acerca-de.component';

describe('AcercaDEComponent', () => {
  let component: AcercaDEComponent;
  let fixture: ComponentFixture<AcercaDEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcercaDEComponent]
    });
    fixture = TestBed.createComponent(AcercaDEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
