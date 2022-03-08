import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDateComponent } from './result-date.component';

describe('ResultDateComponent', () => {
  let component: ResultDateComponent;
  let fixture: ComponentFixture<ResultDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
