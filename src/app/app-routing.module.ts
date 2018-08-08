import { NgModule }		from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }	from './home/home.component';
import { LoginComponent } 	from './login/login.component';
import { AboutUsComponent }	from './about-us/about-us.component';
import { ServicesComponent }	from './services/services.component';
import { ContactUsComponent }	from './contact-us/contact-us.component';

import { AdminComponent } 	from './admin/admin.component';

const routes: Routes = [
	//{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '', component: HomeComponent, pathMatch: 'full'  },
	{ path: 'home', component: HomeComponent },
        { path: 'login', component: LoginComponent },
	{ path: 'about-us', component: AboutUsComponent },
	{ path: 'services', component: ServicesComponent, pathMatch: 'full' },
	{ path: 'contact-us', component: ContactUsComponent },

	{ path: 'admin', component: AdminComponent }

];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
