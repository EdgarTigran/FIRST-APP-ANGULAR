import { Component, OnInit } from "@angular/core";
import { CheckFormService } from "../checkForm.service";
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

  constructor(private checkForm: CheckFormService) {}

  ngOnInit() {}

  addUserClick() {
    const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      age: this.age
    };

    if (!this.checkForm.chackFirstname(user.firstname)) {
      console.log("First name not entered");
      return false;
    } else if (!this.checkForm.chackLastname(user.lastname)) {
      console.log("Last name not entered");
      return false;
    } else if (!this.checkForm.chackEmail(user.email)) {
      console.log("Email not entered");
      return false;
    } else if (!this.checkForm.chackAge(user.age)) {
      console.log("Age name not entered");
      return false;
    }
  }
}
