import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppHeaderComponent} from './components/app-header/app-header.component';

import {PenalityFormatterPipe, PointsFormatterPipe, TimeFormatterPipe} from './pipes/pipes';

import {HomeComponent} from './views/home/home.component';
import {SkaterComponent} from './views/skater/skater.component';

@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        PenalityFormatterPipe,
        PointsFormatterPipe,
        TimeFormatterPipe,
        HomeComponent,
        SkaterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
