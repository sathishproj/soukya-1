import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGeriatricComponent } from './demo-geriatric.component';

describe('DemoGeriatricComponent', () => {
  let component: DemoGeriatricComponent;
  let fixture: ComponentFixture<DemoGeriatricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoGeriatricComponent]
    });
    fixture = TestBed.createComponent(DemoGeriatricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
