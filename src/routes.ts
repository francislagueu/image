import { RegisterComponent } from './app/register/register.component';
import { LoginComponent } from './app/login/login.component';
import { ImageDetailComponent } from './app/image-detail/image-detail.component';
import { UploadComponent } from './app/upload/upload.component';
import { GalleryComponent } from './app/gallery/gallery.component';
import { Routes } from '@angular/router';
import {AuthenticationGuard} from './app/authentication.guard';


export const appRoutes: Routes = [
    {
        path: 'gallery',
        component: GalleryComponent,
        canActivate: [AuthenticationGuard]
    },
     {
        path: 'upload',
        component: UploadComponent,
        canActivate: [AuthenticationGuard]
    },
     {
        path: 'image/:id',
        component: ImageDetailComponent,
        canActivate: [AuthenticationGuard]
    },
     {
        path: '',
        redirectTo: '/gallery',
        pathMatch: 'full'
    },
     {
        path: 'login',
        component: LoginComponent
    },
     {
        path: 'register',
        component: RegisterComponent
    }

];
