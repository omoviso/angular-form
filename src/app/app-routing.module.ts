import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component";
import { DefaultPathComponent } from "./default-path/default-path.component";
import { AuthorizedContentComponent } from "./authorized-content/authorized-content.component";
import { AuthGuard, LoggedInGuard } from "./auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "login",
    component: LoginFormComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: "register",
    component: SignUpFormComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: "content",
    component: AuthorizedContentComponent,
    canActivate: [AuthGuard]
  },
  { path: "**", component: DefaultPathComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
