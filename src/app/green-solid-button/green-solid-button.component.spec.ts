import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenSolidButtonComponent } from './green-solid-button.component';

describe('GreenSolidButtonComponent', () => {
  let component: GreenSolidButtonComponent;
  let fixture: ComponentFixture<GreenSolidButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenSolidButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenSolidButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
