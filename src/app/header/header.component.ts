import { Component } from '@angular/core';
import { UploadFormComponent } from "../upload-form/upload-form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UploadFormComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  uplaodDialogOpen: boolean = false;

  openUploadDialog() {
    this.uplaodDialogOpen = true;
  }

  closeUploadDialog() {
    this.uplaodDialogOpen = false;
  }

}
