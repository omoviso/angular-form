import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../auth.service";
@Component({
  selector: "app-sign-up-form",
  templateUrl: "./sign-up-form.component.html",
  styleUrls: ["./sign-up-form.component.css"]
})
export class SignUpFormComponent implements OnInit {
  userInfo = this._fb.group({
    email: [""],
    password: [""]
  });

  constructor(private _fb: FormBuilder, private _auth: AuthService) {}

  ngOnInit() {}

  createUser() {
    console.log(this.userInfo.value);
    this._auth.getRegistrationInfo(this.userInfo.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
