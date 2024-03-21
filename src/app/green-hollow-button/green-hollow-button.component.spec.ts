import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenHollowButtonComponent } from './green-hollow-button.component';

describe('GreenHollowButtonComponent', () => {
  let component: GreenHollowButtonComponent;
  let fixture: ComponentFixture<GreenHollowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenHollowButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenHollowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
