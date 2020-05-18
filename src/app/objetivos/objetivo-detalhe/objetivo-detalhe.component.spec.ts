import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoDetalheComponent } from './objetivo-detalhe.component';

describe('ObjetivoDetalheComponent', () => {
  let component: ObjetivoDetalheComponent;
  let fixture: ComponentFixture<ObjetivoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
