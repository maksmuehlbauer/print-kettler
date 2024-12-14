import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-form.component.html',
  styleUrl: './upload-form.component.scss'
})
export class UploadFormComponent {
  @Output() closeDialog = new EventEmitter<void>();

  closeUplaodWindow() {
    this.closeDialog.emit();
  }

  hovered: boolean = false;


  files: File[] = []; // Hochgeladene Dateien

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
