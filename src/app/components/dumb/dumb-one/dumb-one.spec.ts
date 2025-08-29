import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbOne } from './dumb-one';

describe('DumbOne', () => {
  let component: DumbOne;
  let fixture: ComponentFixture<DumbOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DumbOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DumbOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
