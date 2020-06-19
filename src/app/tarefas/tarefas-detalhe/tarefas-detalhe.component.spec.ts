import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasDetalheComponent } from './tarefas-detalhe.component';

describe('TarefasDetalheComponent', () => {
  let component: TarefasDetalheComponent;
  let fixture: ComponentFixture<TarefasDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
