import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AnimateursComponent } from './animateurs/animateurs.component';
import { AddAnimateurComponent } from './add-animateur/add-animateur.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'projet1';
}
