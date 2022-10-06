import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { MustMatch } from './passwordfile';



@Component({
  selector: 'app-validatorfile',
  templateUrl: './validatorfile.component.html',
  styleUrls: ['./validatorfile.component.css']
})
export class ValidatorfileComponent implements OnInit {

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}
  formfile: any;

  ngOnInit(): void {
    this.formfile = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      dateofbirth: ['', [Validators.required,]],
      age: ['', [Validators.required,]],
      emailid: ['', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      mobilenumber: ['', [Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!-*])/)]],
      confirmPassword: ['', [Validators.required]],
      fileupload:['',[Validators.required,Validators.pattern('')]],


    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

  }


  showpassword :boolean | undefined;


  alphanum(event:any) {
    var alpha = String.fromCharCode(event.keyCode);
    if (/[0-9]/.test(alpha)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }


  OnsubmitData() {
    this.submitted = true;
    if (this.formfile.invalid) {
      return;
    }
    else {
      console.log(this.formfile.value);
    }
  }


  get firstname() {
    return this.formfile.get('firstName')
    }
  get lastname() {
    return this.formfile.get('lastName');
    }
  get dateofbirth() { 
    return this.formfile.get('dateofbirth')
     }
  get age() {
     return this.formfile.get('age')
    }
  get emailid() {
     return this.formfile.get('emailid')
    }
  get mobilenumber() {
     return this.formfile.get('mobilenumber')
    } 
  get password() {
     return this.formfile.get('password')
    }
  get confirmPassword() {
     return this.formfile.get('confirmPassword')
    }
    get fileupload() {
      return this.formfile.get('fileupload')
      }
 







    urls : string[] = [];
    onSelectFile(event:any) {
      if (event.target.files && event.target.files[0]) {
          var filesAmount = event.target.files.length;
          for (let i = 0; i < filesAmount; i++) {
                  var reader = new FileReader();
                  reader.onload = (event:any) => {

                    console.log(event.target.result)

                    
                     this.urls.push(event.target.result); 
                  }
                  
                  reader.readAsDataURL(event.target.files[i]);
          }
        } 
    }
    remove(index: number){
      this.urls.splice(index,1);
    }
}
