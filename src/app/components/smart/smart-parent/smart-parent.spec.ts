import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartParent } from './smart-parent';

describe('SmartParent', () => {
  let component: SmartParent;
  let fixture: ComponentFixture<SmartParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
