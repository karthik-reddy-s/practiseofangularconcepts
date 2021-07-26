import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InkoopComponent } from './inkoop.component';

describe('InkoopComponent', () => {
  let component: InkoopComponent;
  let fixture: ComponentFixture<InkoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InkoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InkoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
