import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactDataInterface } from '../../../user-data.interface';

@Component({
  selector: 'app-msg-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './msg-form.component.html',
  styleUrl: './msg-form.component.scss'
})
export class MsgFormComponent {



  contactData:ContactDataInterface = {
    name: "",
    mail: "",
    subject: "",
    message: "",
  }

  onSubmit(ngForm: NgForm, event: Event) {
    if (ngForm.submitted && ngForm.form.valid) {
      event.preventDefault();
      console.log(this.contactData)
    }
  }

}
