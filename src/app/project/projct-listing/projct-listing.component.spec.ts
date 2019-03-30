import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjctListingComponent } from './projct-listing.component';

describe('ProjctListingComponent', () => {
  let component: ProjctListingComponent;
  let fixture: ComponentFixture<ProjctListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjctListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjctListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
