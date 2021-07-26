import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackdbComponent } from './backdb/backdb.component';
import { customcomponent } from './custom/custom.component';
import { ParentComponent } from './parent/parent.component'
import { SiblingComponent } from './sibling/sibling.component'
import { CreatestudentComponent } from './backdb/createstudent/createstudent.component'
import { UpdatestudentComponent } from './backdb/updatestudent/updatestudent.component';
import{LoginComponent} from './login/login.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{AuthGuard} from './_guards/auth.guard';
import{InkoopComponent} from './inkoop/inkoop.component';
import{ReactiveformsComponent} from './reactiveforms/reactiveforms.component';
import{FormsComponent} from './forms/forms.component';





const routes: Routes = [{
  path: 'custom',
  component: customcomponent,
},{path: 'forms',
component: FormsComponent,
},{path: 'reactiveforms',
component: ReactiveformsComponent,
}, {
  path: 'parent',
  component: ParentComponent,
}, {
  path: 'sibling',
  component: SiblingComponent,
}, {
  path: 'backdb',
  component: BackdbComponent,
},

{
  path: 'createstudent',
  component: CreatestudentComponent,
},{
  path:'updatestudent',
  component: UpdatestudentComponent,
},{path:'login',
component: LoginComponent,
},{path:'dashboard',
component: DashboardComponent,
canActivate:[AuthGuard]
},{path:'inkoop',
component: InkoopComponent,
},
{path:'lazy',
loadChildren:()=>import('./lazy/lazy.module').then((m)=>m.LazyModule)}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
