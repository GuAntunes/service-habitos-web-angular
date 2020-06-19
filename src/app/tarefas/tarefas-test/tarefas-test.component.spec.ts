import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasTestComponent } from './tarefas-test.component';

describe('TarefasTestComponent', () => {
  let component: TarefasTestComponent;
  let fixture: ComponentFixture<TarefasTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
