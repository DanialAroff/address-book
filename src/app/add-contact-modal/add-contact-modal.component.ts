import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  styleUrls: ['./add-contact-modal.component.css']
})
export class ContactModalComponent {
  operation: string;
  newContact: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: ''
  };
  // newContact: Contact | null = null;
  contactData: any = {};
  contacts: Contact[] = [];

  constructor(
    public dialogRef: MatDialogRef<ContactModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.operation = data.operation;
    
    if (this.operation === 'update' || this.operation === 'delete') {
      this.contactData = { ...data.data};
    }

    this.contacts = data.contacts;
  }

  onInputChange(newValue: any, property: string):void {
    this.contactData[property] = newValue;
    console.log('updating contact');
  }

  onSubmit() {
    if (this.operation === 'add') {
      if (this.contacts.length == 0) {
        this.newContact.id = 1;
      } else {
        const lastContact = this.contacts[this.contacts.length - 1];
        this.newContact.id = lastContact.id + 1;
      }

      this.dialogRef.close({ operation: 'add', contact: this.newContact });
      console.log('test add');
    } else if (this.operation === 'update') {
      this.dialogRef.close({ operation: 'update', contact: this.contactData })
    } else if (this.operation === 'delete') {
      this.dialogRef.close({ operation: 'delete', contactId: this.contactData.id });
    } else {
      this.dialogRef.close();
    }

  }

  closeModal() {
    this.dialogRef.close();
  }
}
