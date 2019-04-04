import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { routing } from './app.routing';
import { StartComponent } from './start/start.component';
import { BridgeComponent } from './bridge/bridge.component';
import { BrokenCartComponent } from './broken-cart/broken-cart.component';
import { ForestEnterComponent } from './forest-enter/forest-enter.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { WakeComponent } from './wake/wake.component';
import { LootcartComponent } from './lootcart/lootcart.component';
import { DefendComponent } from './defend/defend.component';
import { PlayerViewComponent } from './player-view/player-view.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartComponent,
    BridgeComponent,
    BrokenCartComponent,
    ForestEnterComponent,
    WakeComponent,
    LootcartComponent,
    DefendComponent,
    PlayerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
