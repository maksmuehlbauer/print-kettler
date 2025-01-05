import { Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { ContactComponent } from './main-container/contact/contact.component';
import { AboutUsComponent } from './main-container/about-us/about-us.component';
import { ServiceComponent } from './main-container/service/service.component';
import { PerformanceUnderCategoryComponent } from './main-container/performance-under-category/performance-under-category.component';
import { PerformanceComponent } from './main-container/performance/performance.component';

export const routes: Routes = [
    { path: '', component: MainContainerComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'sub/:type', component: PerformanceUnderCategoryComponent },
    { path: 'performance', component: PerformanceComponent }
];
