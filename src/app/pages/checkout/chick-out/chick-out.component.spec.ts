import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickOutComponent } from './chick-out.component';

describe('ChickOutComponent', () => {
  let component: ChickOutComponent;
  let fixture: ComponentFixture<ChickOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChickOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChickOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
