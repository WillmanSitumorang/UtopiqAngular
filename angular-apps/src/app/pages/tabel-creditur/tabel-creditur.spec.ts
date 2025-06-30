import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelCreditur } from './tabel-creditur';

describe('TabelCreditur', () => {
  let component: TabelCreditur;
  let fixture: ComponentFixture<TabelCreditur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelCreditur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelCreditur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
