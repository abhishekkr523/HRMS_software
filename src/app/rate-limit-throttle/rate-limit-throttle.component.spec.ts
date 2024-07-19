import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateLimitThrottleComponent } from './rate-limit-throttle.component';

describe('RateLimitThrottleComponent', () => {
  let component: RateLimitThrottleComponent;
  let fixture: ComponentFixture<RateLimitThrottleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RateLimitThrottleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateLimitThrottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
