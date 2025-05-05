import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgoinwithusComponent } from './lgoinwithus.component';

describe('LgoinwithusComponent', () => {
  let component: LgoinwithusComponent;
  let fixture: ComponentFixture<LgoinwithusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgoinwithusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgoinwithusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
