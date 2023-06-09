import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewreminderPage } from './newreminder.page';

describe('NewreminderPage', () => {
  let component: NewreminderPage;
  let fixture: ComponentFixture<NewreminderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewreminderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
