import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SimulationsComponent } from './simulations/simulations.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MatSidenavModule } from'@angular/material/sidenav';
import { MatIconModule } from'@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    SimulationsComponent,
    SafeUrlPipe
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
