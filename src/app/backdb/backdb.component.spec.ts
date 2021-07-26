import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackdbComponent } from './backdb.component';

describe('BackdbComponent', () => {
  let component: BackdbComponent;
  let fixture: ComponentFixture<BackdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackdbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
