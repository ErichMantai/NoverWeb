import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneToManyComponent } from './one-to-many.component';

describe('OneToManyComponent', () => {
  let component: OneToManyComponent;
  let fixture: ComponentFixture<OneToManyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneToManyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneToManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
