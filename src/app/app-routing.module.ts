import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCompComponent } from './api-comp/api-comp.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: ApiCompComponent},
  {path: 'main', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
