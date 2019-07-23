import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { AuthService } from "./auth.service";
import { DefaultPathComponent } from "./default-path/default-path.component";
import { AuthorizedContentComponent } from "./authorized-content/authorized-content.component";
import { AuthGuard, LoggedInGuard } from "./auth.guard";
import { TokenInterceptorService } from "./token-interceptor.service";
import { AuthContentService } from "./auth-content.service";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    LoginFormComponent,
    DefaultPathComponent,
    AuthorizedContentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    LoggedInGuard,
    AuthContentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
