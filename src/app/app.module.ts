import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthenticLifeComponent } from './tenets/authentic-life/authentic-life.component';
import { MoralityComponent } from './tenets/morality/morality.component';
import { AgencyComponent } from './tenets/agency/agency.component';
import { ControlComponent } from './tenets/control/control.component';
import { AgileLifeComponent } from './tenets/agile-life/agile-life.component';
import { TraumaComponent } from './tenets/trauma/trauma.component';
import { SpiritualityComponent } from './tenets/spirituality/spirituality.component';
import { TaboosComponent } from './tenets/taboos/taboos.component';
import { FamilyComponent } from './tenets/family/family.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'tenet',
    children: [
      {path: 'authentic-life', component: AuthenticLifeComponent}, 
      {path: 'morality', component: MoralityComponent}, 
      {path: 'agency', component: AgencyComponent}, 
      {path: 'control', component: ControlComponent}, 
      {path: 'agile-life', component: AgileLifeComponent}, 
      {path: 'trauma', component: TraumaComponent}, 
      {path: 'spirituality', component: SpiritualityComponent}, 
      {path: 'taboos', component: TaboosComponent}, 
      {path: 'family', component: FamilyComponent}, 
    ]
  },
];


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    AboutComponent,
    AuthenticLifeComponent,
    MoralityComponent,
    AgencyComponent,
    ControlComponent,
    AgileLifeComponent,
    TraumaComponent,
    SpiritualityComponent,
    TaboosComponent,
    FamilyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
