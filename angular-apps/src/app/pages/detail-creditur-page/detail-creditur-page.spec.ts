import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCrediturPage } from './detail-creditur-page';

describe('DetailCrediturPage', () => {
  let component: DetailCrediturPage;
  let fixture: ComponentFixture<DetailCrediturPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCrediturPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCrediturPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
