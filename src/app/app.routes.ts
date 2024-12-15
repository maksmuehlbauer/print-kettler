import { Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { ContactComponent } from './main-container/contact/contact.component';

export const routes: Routes = [
    { path: '', component: MainContainerComponent },
    { path: 'contact', component: ContactComponent }
];
