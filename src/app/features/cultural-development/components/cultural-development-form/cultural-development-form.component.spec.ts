import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalDevelopmentFormComponent } from './cultural-development-form.component';

describe('CulturalDevelopmentFormComponent', () => {
  let component: CulturalDevelopmentFormComponent;
  let fixture: ComponentFixture<CulturalDevelopmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CulturalDevelopmentFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturalDevelopmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
