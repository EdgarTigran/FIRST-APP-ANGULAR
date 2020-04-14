import { Injectable } from "@angular/core";

@Injectable()
export class CheckFormService {
  constructor() {}

  chackLogin(login) {
    if (login == undefined) return false;
    else return true;
  }

  chackPassword(password) {
    if (password == undefined) return false;
    else return true;
  }

  chackFirstname(firstname) {
    if (firstname == undefined) return false;
    else return true;
  }

  chackLastname(lastname) {
    if (lastname == undefined) return false;
    else return true;
  }

  chackEmail(email) {
    if (email == undefined) return false;
    else return true;
  }

  chackAge(age) {
    if (age == undefined) return false;
    else return true;
  }
}
