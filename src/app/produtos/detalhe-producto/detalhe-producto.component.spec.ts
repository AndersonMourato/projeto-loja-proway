import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProductoComponent } from './detalhe-producto.component';

describe('DetalheProductoComponent', () => {
  let component: DetalheProductoComponent;
  let fixture: ComponentFixture<DetalheProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
