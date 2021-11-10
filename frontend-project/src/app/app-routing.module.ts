import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AgentListComponent } from './components/agent-list/agent-list.component';
import { AuthGuard } from './auth.guard';
import{RegisterComponent} from './components/register/register.component'
//import { AuthService } from './services/auth-service.service';



const routes: Routes = [{
  path: '',component:LoginComponent,
},
{
  path: 'register',component:RegisterComponent 
}
,{
  path: 'agentlist',component:AgentListComponent ,    canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
