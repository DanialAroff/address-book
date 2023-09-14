import { Component } from '@angular/core';
import { Contact } from './models/contact.model';
import { MatDialog } from '@angular/material/dialog';
import { ContactModalComponent } from './add-contact-modal/add-contact-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  title = 'Address Book';

  contacts: Contact[] = [
    {
      id: 1,
      firstName: "Danial Harith",
      lastName: "",
      email: "danialharith0416@gmail.com",
      phoneNumber: "011-60643317",
      address: "No 31, Lorong IM 5/11 No 31, Lorong IM 5/11 No 31, Lorong IM 5/11"
    },
  ];

  openModal(operation: string, data?: any): void {
    const dialogRef = this.dialog.open(ContactModalComponent, {
      width: '420px',
      data: { operation, data, contacts: this.contacts }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        switch (result.operation) {
          case 'add':
            if (result.contact) {
              this.contacts.push(result.contact);
            }
            break;
          case 'update':
            if (result.contact) {
              const updatedContact = result.contact;
              const index = this.contacts.findIndex(contact => contact.id === updatedContact.id);

              if (index !== -1) {
                this.contacts[index] = updatedContact;
              }
            }
            break;
          case 'delete':
            if (result.contactId) {
              console.log('deleteeee')
              const id = result.contactId;
              const index = this.contacts.findIndex(contact => contact.id === id);

              if (index !== -1) {
                this.contacts.splice(index, 1);
              }
            }
            break;
        }
      }
    });
  }

}