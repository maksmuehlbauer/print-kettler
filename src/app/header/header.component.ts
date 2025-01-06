import { Component } from '@angular/core';
import { UploadFormComponent } from "../upload-form/upload-form.component";
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UploadFormComponent, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  uplaodDialogOpen: boolean = false;
  performanceHover = false;

  constructor(private router: Router) {

  }

  isPerformanceActive(): boolean {
    const currentRoute = this.router.url;
    return currentRoute.startsWith('/performance') || currentRoute.startsWith('/sub')
  }

  openUploadDialog() {
    this.uplaodDialogOpen = true;
  }

  closeUploadDialog() {
    this.uplaodDialogOpen = false;
  }

}
