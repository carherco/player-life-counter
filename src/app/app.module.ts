import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './pages/config/config.component';
import { GameComponent } from './pages/game/game.component';
import { PlayerComponent } from './pages/player/player.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    GameComponent,
    PlayerComponent,
    PlayerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
