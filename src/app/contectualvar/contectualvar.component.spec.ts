import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectualvarComponent } from './contectualvar.component';

describe('ContectualvarComponent', () => {
  let component: ContectualvarComponent;
  let fixture: ComponentFixture<ContectualvarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContectualvarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContectualvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
