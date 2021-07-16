import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchgamesComponent } from './searchgames.component';

describe('SearchgamesComponent', () => {
  let component: SearchgamesComponent;
  let fixture: ComponentFixture<SearchgamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchgamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
