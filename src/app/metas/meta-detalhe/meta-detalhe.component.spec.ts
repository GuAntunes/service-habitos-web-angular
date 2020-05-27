import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaDetalheComponent } from './meta-detalhe.component';

describe('MetaDetalheComponent', () => {
  let component: MetaDetalheComponent;
  let fixture: ComponentFixture<MetaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
