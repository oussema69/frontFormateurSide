import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bckphoto: any = "assets/logoprojet.png";
  loginForm!: FormGroup;
  hide = true
  fieldTextType!: boolean;
  private formateur: any;
  constructor( private authService : LoginService ,private router :Router ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl ('' , Validators.required),
      password : new FormControl ('' , Validators.required)
    });
  }


  loginAdmin() {

      this.authService.login(this.loginForm.value).subscribe((res:any)=>{
          localStorage.setItem("mhatlioussema", res.token);
        const token = localStorage.getItem('mhatlioussema');

        if(token) {
          let decoded = jwt_decode(token);

          this.formateur=decoded;
        }
        if(this.formateur.data.isValid) {
          this.router.navigate(['/home/stat'])

        }        else Swal.fire({title: "votre compte a été desactivé ", icon: "error"})


        },error => Swal.fire({title: "email ou mot de passe erroné", icon: "error"})
      )

  }
}
