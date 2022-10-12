import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CliamsComponent } from './components/cliams/cliams.component';
import { DependentsComponent } from './components/dependents/dependents.component';
import { HomeComponent } from './components/home/home.component';
import { MemberdependentsComponent } from './components/memberdependents/memberdependents.component';
import { MemberregistrationComponent } from './components/memberregistration/memberregistration.component';
import { RegistrationformComponent } from './components/registrationform/registrationform.component';
import { UpdatedependentsComponent } from './components/updatedependents/updatedependents.component';

const routes: Routes = [
  {path: '', redirectTo: 'registration', pathMatch:'full'},
  {path : 'member', component: MemberregistrationComponent},
  {path : "home", component: HomeComponent },
  {path : "registration", component: RegistrationformComponent},
  {path : "dependents/:response", component: MemberdependentsComponent},
  {path : "updatemember", component: DependentsComponent},
  {path : "updatedependents", component: UpdatedependentsComponent},
  {path : "claim", component: CliamsComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
