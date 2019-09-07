import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GLayerComponent } from './g-layer.component';

describe('GLayerComponent', () => {
  let component: GLayerComponent;
  let fixture: ComponentFixture<GLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
