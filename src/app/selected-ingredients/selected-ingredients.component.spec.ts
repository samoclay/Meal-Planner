import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedIngredientsComponent } from './selected-ingredients.component';

describe('SelectedIngredientsComponent', () => {
  let component: SelectedIngredientsComponent;
  let fixture: ComponentFixture<SelectedIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
