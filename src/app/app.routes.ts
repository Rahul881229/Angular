import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LgoinwithusComponent } from './lgoinwithus/lgoinwithus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DropdwonComponent } from './dropdwon/dropdwon.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
{path:'about', component:AboutComponent},
{path:'loginwithus', component:LgoinwithusComponent},
{path:'contactus', component:ContactusComponent},
{path:'', component:HomeComponent},
{path:'**',component:PageNotFoundComponent}//  this is for pagenot found it should be in the last routing line 



];
