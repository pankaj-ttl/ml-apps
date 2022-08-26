import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CncDataComponent } from './cnc-data.component';

describe('CncDataComponent', () => {
  let component: CncDataComponent;
  let fixture: ComponentFixture<CncDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CncDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CncDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
