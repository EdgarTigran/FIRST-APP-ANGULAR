import { Component, OnInit } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";
import { AddUserService } from "../addUser.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  login: String;
  password: String;

  constructor(
    private flashMessag: FlashMessagesService,
    private addService: AddUserService,
    private router: Router
  ) {}

  ngOnInit() {}

  userLoginClick() {
    const user = {
      login: this.login,
      password: this.password,
    };

    if (user.password == undefined) {
      this.flashMessag.show("Enter your password", {
        cssClass: "alert-danger",
        timeout: 4000,
      });
    }
    this.addService.authUser(user).subscribe((data) => {
      if (!data.success) {
        this.flashMessag.show(data.msg, {
          cssClass: "alert-danger",
          timeout: 4000,
        });
      } else {
        this.flashMessag.show("You have successfully logged in", {
          cssClass: "alert-success",
          timeout: 4000,
        });
        this.router.navigate(["all"]);
        this.addService.storeUser(data.token, data.user);
      }
    });
  }
}
