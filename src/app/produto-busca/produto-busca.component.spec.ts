import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoBuscaComponent } from './produto-busca.component';

describe('ProdutoBuscaComponent', () => {
  let component: ProdutoBuscaComponent;
  let fixture: ComponentFixture<ProdutoBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoBuscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
