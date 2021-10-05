import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EscCancelationDirective } from "./directives/esc-cancelation.directive";
import { DpLogoComponent } from './dp-logo/dp-logo.component';
import { KeySkillBtnsComponent } from './key-skill-btns/key-skill-btns.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { BackIconComponent } from './back-icon/back-icon.component';
import { CrossIconComponent } from './cross-icon/cross-icon.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { NoEmojiPipe } from './pipes/no-emoji.pipe';
import { TypingComponent } from './typing/typing.component';

@NgModule({
  declarations: [
    MaxLengthPipe,
    NoEmojiPipe,
    AppComponent,
    AboutComponent,
    ContactComponent,
    EscCancelationDirective,
    DpLogoComponent,
    KeySkillBtnsComponent,
    LandingPageComponent,
    NavigatorComponent,
    PortfolioComponent,
    ProfileComponent,
    ProfileCardComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    ProjectsComponent,
    BackIconComponent,
    CrossIconComponent,
    TypingComponent
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
