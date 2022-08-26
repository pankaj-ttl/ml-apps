import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CncliveComponent } from './cnclive.component';

describe('CncliveComponent', () => {
  let component: CncliveComponent;
  let fixture: ComponentFixture<CncliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CncliveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CncliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
