import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSweepstakesComponent } from './show-sweepstakes.component';

describe('ShowSweepstakesComponent', () => {
  let component: ShowSweepstakesComponent;
  let fixture: ComponentFixture<ShowSweepstakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSweepstakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSweepstakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
