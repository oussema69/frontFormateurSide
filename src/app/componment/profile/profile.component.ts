import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormateursService } from '../../services/formateur.service';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { FileService } from 'src/app/services/file.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formateur!: any;
  updateForm!: FormGroup;
  upformateur!: any;  show_button: Boolean = false;
  show_eye: Boolean = false;
  id: any;private file: any;
  fileUrl="http://localhost:3000/files/get/";
  constructor(private route:ActivatedRoute,private  service:FormateursService,private fileservice:FileService) { }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.params["id"];
    await this.service.getById(this.id).subscribe(
       data=>{
         this.formateur=data;

       }
     )
  }transform()
  {
    this.service.getById(this.formateur._id).subscribe(
      data=>{this.formateur=data;
           })
      return this.formateur;
  }
  updateFormateur(): void {
    this.upformateur=this.formateur;
    this.fileservice.upload(this.file).subscribe(res => {
      this.upformateur.logo = res.filename;
    this.service.update(this.formateur._id,this.upformateur).subscribe(
      (res)=>{ Swal.fire({ title: '    succés', icon: 'success' });
    this.transform(); },
       (err)=>{ Swal.fire({ title: '    erreur', icon: 'error' }); } )
  })
  }
  get getformaddApp(){
    return this.updateForm.controls;
  }
  onImageUpload(event: any) {
    this.file = event.target.files[0];

  }
  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }
}
