import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyToOneComponent } from './many-to-one.component';

describe('ManyToOneComponent', () => {
  let component: ManyToOneComponent;
  let fixture: ComponentFixture<ManyToOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManyToOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyToOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
