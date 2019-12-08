import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmmoComponent } from './ammo/ammo.component';
import { BonusComponent } from './bonus/bonus.component';
import { BossComponent } from './boss/boss.component';
import { BossAmmoComponent } from './boss-ammo/boss-ammo.component';
import { EnemyComponent } from './enemy/enemy.component';
import { GameOverComponent } from './game-over/game-over.component';
import { ObstacleComponent } from './obstacle/obstacle.component';
import { PauseComponent } from './pause/pause.component';
import { ShipComponent } from './ship/ship.component';
import { VictoryComponent } from './victory/victory.component';
import { GameComponent } from './game/game.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OptionsComponent } from './options/options.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AmmoComponent,
    BonusComponent,
    BossComponent,
    BossAmmoComponent,
    EnemyComponent,
    GameOverComponent,
    ObstacleComponent,
    PauseComponent,
    ShipComponent,
    VictoryComponent,
    GameComponent,
    HomepageComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
