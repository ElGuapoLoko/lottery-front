import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSweepstakesComponent } from './add-sweepstakes.component';

describe('AddSweepstakesComponent', () => {
  let component: AddSweepstakesComponent;
  let fixture: ComponentFixture<AddSweepstakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSweepstakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSweepstakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
