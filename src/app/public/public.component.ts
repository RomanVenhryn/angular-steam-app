import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Observable, tap } from 'rxjs';
import { AuthService } from '../core/auth/auth.service';
import { User } from '../core/services/user.model';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  formGroup: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;



  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,

    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [ Validators.required ]),
      password: new FormControl('', [ Validators.required ])
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formGroup.invalid) {
        return;
    }

    this.loading = true;
    this.authService.login(this.formGroup.controls['email'].value, this.formGroup.controls['password'].value).subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
    });

  }

}
