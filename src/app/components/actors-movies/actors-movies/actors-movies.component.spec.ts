import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsMoviesComponent } from './actors-movies.component';

describe('ActorsMoviesComponent', () => {
  let component: ActorsMoviesComponent;
  let fixture: ComponentFixture<ActorsMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
