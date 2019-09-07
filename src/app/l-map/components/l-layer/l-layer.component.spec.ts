import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LLayerComponent } from './l-layer.component';

describe('LLayerComponent', () => {
  let component: LLayerComponent;
  let fixture: ComponentFixture<LLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
