import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PastPage } from './past.page';

describe('PastPage', () => {
  let component: PastPage;
  let fixture: ComponentFixture<PastPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
