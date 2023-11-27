import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinessiComponent } from './finessi.component';

describe('FinessiComponent', () => {
  let component: FinessiComponent;
  let fixture: ComponentFixture<FinessiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinessiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinessiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
