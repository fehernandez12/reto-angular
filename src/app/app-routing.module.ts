import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/hero-detail/detail/detail.component';
import { ListComponent } from './components/hero-list/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: ':id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
