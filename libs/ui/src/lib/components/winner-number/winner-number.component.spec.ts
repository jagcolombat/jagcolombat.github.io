import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerNumberComponent } from './winner-number.component';

describe('WinnerNumberComponent', () => {
  let component: WinnerNumberComponent;
  let fixture: ComponentFixture<WinnerNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
