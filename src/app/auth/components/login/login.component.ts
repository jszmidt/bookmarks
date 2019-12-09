import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, tap } from 'rxjs/operators';
import { AlertService } from '../../../core/services/alert.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  msg: { text: string };
  readonly RETURN_URL = 'returnUrl';


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.alertService.getMessage().pipe(tap(msg => console.log(msg))).subscribe(msg => this.msg = msg);

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams[this.RETURN_URL] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        _ => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
