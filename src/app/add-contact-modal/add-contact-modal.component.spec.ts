import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactModalComponent } from './add-contact-modal.component';

describe('AddContactModalComponent', () => {
  let component: ContactModalComponent;
  let fixture: ComponentFixture<ContactModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactModalComponent]
    });
    fixture = TestBed.createComponent(ContactModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
