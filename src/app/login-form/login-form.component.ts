import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  userInfo = this._fb.group({
    email: [""],
    password: [""]
  });
  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {}
  verifyUser() {
    const { email, password } = this.userInfo.value;
    this._auth.getLoginInfo(this.userInfo.value).subscribe(
      res => {
        localStorage.setItem("token", res.token);
        this._router.navigate(["/content"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
