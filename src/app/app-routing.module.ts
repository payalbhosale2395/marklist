import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { StudformComponent } from './studform/studform.component';

const routes: Routes = [
  { path: 'scorecard', component: ScorecardComponent},
  { path: 'studform', component: StudformComponent},
  { path: '',   redirectTo: '/studform', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
