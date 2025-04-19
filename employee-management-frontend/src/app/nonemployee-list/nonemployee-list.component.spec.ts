import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonemployeeListComponent } from './nonemployee-list.component';

describe('NonemployeeListComponent', () => {
  let component: NonemployeeListComponent;
  let fixture: ComponentFixture<NonemployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonemployeeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonemployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
