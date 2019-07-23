import { Component, OnInit } from "@angular/core";
import { AuthContentService } from "../auth-content.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-authorized-content",
  templateUrl: "./authorized-content.component.html",
  styleUrls: ["./authorized-content.component.css"]
})
export class AuthorizedContentComponent implements OnInit {
  content = { title: "", body: "" };
  constructor(
    private _authContent: AuthContentService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._authContent.getContent().subscribe(
      data => {
        console.log(this.content);
        this.content.title = data.title;
        this.content.body = data.body;
      },
      err => {
        console.log(err);
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || err.status === 500) {
            this._router.navigate(["/login"]);
          }
        }
      }
    );
  }
}
