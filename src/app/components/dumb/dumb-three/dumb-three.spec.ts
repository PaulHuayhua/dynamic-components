import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbThree } from './dumb-three';

describe('DumbThree', () => {
  let component: DumbThree;
  let fixture: ComponentFixture<DumbThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DumbThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DumbThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
