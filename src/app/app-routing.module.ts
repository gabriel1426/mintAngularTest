import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructorsComponent } from './pages/instructors/instructors.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

const routes: Routes = [
  {path:'instructors', component:InstructorsComponent},
  {path:'subjects', component:SubjectsComponent},
  {path:'calendar', component:CalendarComponent},
  {path:'', redirectTo:'/instructors',pathMatch:'full'},
  {path:'**', redirectTo:'/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
