import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from '../home-view/home-view.component'

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class HomeViewRoutingModule { }
