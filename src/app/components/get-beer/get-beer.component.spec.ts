import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBeerComponent } from './get-beer.component';

describe('GetBeerComponent', () => {
  let component: GetBeerComponent;
  let fixture: ComponentFixture<GetBeerComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [GetBeerComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
