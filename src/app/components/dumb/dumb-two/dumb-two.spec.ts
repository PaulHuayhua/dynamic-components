import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbTwo } from './dumb-two';

describe('DumbTwo', () => {
  let component: DumbTwo;
  let fixture: ComponentFixture<DumbTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DumbTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DumbTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
