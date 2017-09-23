import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProdutoComponent } from './modal-categoria.component';

describe('GenericModalComponent', () => {
  let component: ModalProdutoComponent;
  let fixture: ComponentFixture<ModalProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
