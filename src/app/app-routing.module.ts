import { ConfigComponent } from './pages/config/config.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from 'src/app/pages/game/game.component';
import { PlayerComponent } from 'src/app/pages/player/player.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ConfigComponent },
  { path: 'game', component: GameComponent },
  { path: 'player', component: PlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
