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
import { CheckFormService } from "./checkForm.service";

import { from } from "rxjs";

const appRoute: Routes = [
  { path: "", component: HomeComponent },
  { path: "reg", component: RegComponent },
  { path: "all", component: AllComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegComponent,
    AllComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [CheckFormService],
  bootstrap: [AppComponent]
})
export class AppModule {}
