import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBeerButtonComponent } from './get-beer-button.component';

describe('GetBeerButtonComponent', () => {
  let component: GetBeerButtonComponent;
  let fixture: ComponentFixture<GetBeerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBeerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBeerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
