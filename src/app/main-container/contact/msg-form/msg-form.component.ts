import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactDataInterface } from '../../../user-data.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-msg-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './msg-form.component.html',
  styleUrl: './msg-form.component.scss'
})
export class MsgFormComponent {

  transmitMessage: boolean = false;

  contactData:ContactDataInterface = {
    name: "",
    mail: "",
    subject: "",
    message: "",
    privacyPolicy: false
  }

  onSubmit(ngForm: NgForm, event: Event) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.showFeedbackMessage();
      ngForm.reset();
    }
  }

  showFeedbackMessage() {
    this.transmitMessage = true;
    setTimeout(() => {
      this.transmitMessage = false
    }, 5000);
  }



}
