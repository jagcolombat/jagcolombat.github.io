import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroJackpotLayoutComponent } from './euro-jackpot-layout.component';

describe('EuroJackpotLayoutComponent', () => {
  let component: EuroJackpotLayoutComponent;
  let fixture: ComponentFixture<EuroJackpotLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuroJackpotLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroJackpotLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
