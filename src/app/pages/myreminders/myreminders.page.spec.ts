import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyremindersPage } from './myreminders.page';

describe('MyremindersPage', () => {
  let component: MyremindersPage;
  let fixture: ComponentFixture<MyremindersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyremindersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
