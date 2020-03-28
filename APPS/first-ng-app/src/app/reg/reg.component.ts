import { Component, OnInit } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";
import { CheckFormService } from "../checkForm.service";
import { AdduserService } from "../adduser.service";
import { Router } from "@angular/router";
import { from } from "rxjs";

@Component({
  selector: "app-reg",
  templateUrl: "./reg.component.html",
  styleUrls: ["./reg.component.css"]
})
export class RegComponent implements OnInit {
  firstname: String;
  lastname: String;
  email: String;
  age: Number;

  constructor(
    private checkForm: CheckFormService,
    private flashMessag: FlashMessagesService,
    private addService: AdduserService,
    private router: Router
  ) {}

  ngOnInit() {}

  addUserClick() {
    const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      age: this.age
    };

    if (!this.checkForm.chackFirstname(user.firstname)) {
      this.flashMessag.show("First name not entered", {
        cssClass: "alert-danger",
        timeout: 3000
      });

      return false;
    } else if (!this.checkForm.chackLastname(user.lastname)) {
      this.flashMessag.show("Last name not entered", {
        cssClass: "alert-danger",
        timeout: 3000
      });

      return false;
    } else if (!this.checkForm.chackEmail(user.email)) {
      this.flashMessag.show("Email not entered", {
        cssClass: "alert-danger",
        timeout: 3000
      });

      return false;
    } else if (!this.checkForm.chackAge(user.age)) {
      this.flashMessag.show("Age name not entered", {
        cssClass: "alert-danger",
        timeout: 3000
      });

      return false;
    }

    this.addService.registerUser(user).subscribe(data => {
      if (!data.success) {
        this.flashMessag.show(data.msg, {
          cssClass: "alert-danger",
          timeout: 2000
        });
        this.router.navigate(["/reg"]);
      } else {
        this.flashMessag.show(data.msg, {
          cssClass: "alert-success",
          timeout: 2000
        });
        this.router.navigate(["/all"]);
      }
    });
  }
}
