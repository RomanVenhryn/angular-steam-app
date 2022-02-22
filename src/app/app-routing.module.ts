import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './private/components/friends/friends.component';
import { GamesComponent } from './private/components/games/games.component';
import { HeaderComponent } from './private/components/header/header.component';
import { LibraryComponent } from './private/components/library/library.component';
import { ProfileComponent } from './private/components/profile/profile.component';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: PrivateComponent,
  //canActivateChild: [AuthGuard],
  children:[
    {
      path:'',
      redirectTo: 'games',
      pathMatch: 'full'
    },
    {
     path : 'games',
     component: GamesComponent
    },
    {
     path : 'library',
     component: LibraryComponent
    },
    {
      path : 'friends',
      component: FriendsComponent
    },
    {
      path : 'profile',
      component: ProfileComponent
    }
  ]},
  { path: 'login', component: PublicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
