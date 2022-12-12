import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesmentDisplayPageComponent } from './assesment-display-page.component';

describe('AssesmentDisplayPageComponent', () => {
  let component: AssesmentDisplayPageComponent;
  let fixture: ComponentFixture<AssesmentDisplayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssesmentDisplayPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssesmentDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
