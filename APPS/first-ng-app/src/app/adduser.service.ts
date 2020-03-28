import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { map } from "rxjs/operators";
import { from } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AdduserService {
  constructor(private http: Http) {}

  registerUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "aplication/json");
    return this.http
      .post("http://localhost:3000/account/reg", user, { headers: headers })
      .pipe(map(res => res.json()));
  }
}
