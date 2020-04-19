import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { map } from "rxjs/operators";
import { from } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AddUserService {
  token: any;
  user: any;

  constructor(private http: Http) {}

  registerUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "aplication/json");
    return this.http
      .post("http://localhost:3000/account/reg", user, { headers: headers })
      .pipe(map((respons: any) => respons.json()));
  }

  authUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "aplication/json");
    return this.http
      .post("http://localhost:3000/account/auth", user, { headers: headers })
      .pipe(map((respons: any) => respons.json()));
  }
  storeUser(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.token = token;
    this.user = user;
  }
}
