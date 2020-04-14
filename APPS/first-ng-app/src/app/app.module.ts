import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RegComponent } from "./reg/reg.component";
import { AllComponent } from "./all/all.component";
import { HomeComponent } from "./home/home.component";

import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";

import { FormsModule } from "@angular/forms";
import { FlashMessagesModule } from "angular2-flash-messages";
import { CheckFormService } from "./checkForm.service";
import { AddUserService } from "./addUser.service";
import { HttpModule } from "@angular/http";
import { AuthComponent } from "./auth/auth.component";

import { from } from "rxjs";

const appRoute: Routes = [
  { path: "", component: HomeComponent },
  { path: "reg", component: RegComponent },
  { path: "auth", component: AuthComponent },
  { path: "all", component: AllComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegComponent,
    AllComponent,
    HomeComponent,
    FooterComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [CheckFormService, AddUserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
