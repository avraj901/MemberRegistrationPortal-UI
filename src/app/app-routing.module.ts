import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MemberregistrationComponent } from './components/memberregistration/memberregistration.component';

const routes: Routes = [
  {path : 'member', component: MemberregistrationComponent},
  {path : "home", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
