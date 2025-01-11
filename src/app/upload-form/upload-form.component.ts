import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadDataInterface } from '../user-data.interface';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-upload-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './upload-form.component.html',
  styleUrl: './upload-form.component.scss'
})
export class UploadFormComponent {
  @Output() closeDialog = new EventEmitter<void>();

  hovered: boolean = false;
  files: File[] = [];
  uploadInProgress: boolean = false;
  uploadProgress = 0;


  uploadData: UploadDataInterface = {
    projekt: "",
    name: "",
    mail: "",
    contactPerson: "",
    phone: "",
    message: "",
    privacyPolicy: false,
  }

  onSubmit(ngForm: NgForm, event: Event) {
    event.preventDefault();
    if (ngForm.submitted && ngForm.form.valid) {
      this.startUpload();
      // console.log(this.uploadData)
      // ngForm.reset();
    }
  }

  startUpload() {
    this.uploadInProgress = true;
    this.uploadProgress = 0;
    const interval = setInterval(() => {
      if (this.uploadProgress < 100) {
        this.uploadProgress += 10;
      } else {
        clearInterval(interval);
      }
    }, 500);
  }

  deleteFileIndex(i:number, event:Event) {
    this.files.splice(i, 1);
    event.stopPropagation();
  }

  closeUplaodWindow() {
    this.closeDialog.emit();
  }

  onFileSelect(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      this.addFiles(Array.from(target.files));
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    (event.target as HTMLElement).classList.add('dragging');
  }

  onDragLeave(): void {
    document.querySelector('.drop-zone')?.classList.remove('dragging');
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const dropZone = document.querySelector('.drop-zone');
    dropZone?.classList.remove('dragging');

    if (event.dataTransfer?.files) {
      this.addFiles(Array.from(event.dataTransfer.files));
    }
  }

  private addFiles(newFiles: File[]): void {
    this.files.push(...newFiles);
  }



}
