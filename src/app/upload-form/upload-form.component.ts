import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadDataInterface } from '../user-data.interface';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-upload-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload-form.component.html',
  styleUrl: './upload-form.component.scss'
})
export class UploadFormComponent {
  @Output() closeDialog = new EventEmitter<void>();

  hovered: boolean = false;
  files: File[] = []; // Hochgeladene Dateien

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
    console.log(this.uploadData)
    if (ngForm.submitted && ngForm.form.valid) {
      
      console.log(this.uploadData)

      // this.showFeedbackMessage();
      // ngForm.reset();
    }
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
    event.preventDefault(); // Verhindert das Standardverhalten
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
