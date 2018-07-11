import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonksComponent } from './monks/monks.component';
import { TracksComponent } from './tracks/tracks.component';

const routes: Routes = [
  { path: 'monks', component: MonksComponent },
  { path: ':id/tracks', component: TracksComponent },
  { path: '', redirectTo: '/monks', pathMatch: 'full'}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { 
  
}
