import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  userForm:FormGroup;
  listData:any;
  url=[];


  constructor(private fb:FormBuilder) {
    this.listData = [];
    this.userForm = this.fb.group({
      file:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  alphanum(event:any) {
    var alpha = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9]/.test(alpha)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

addItem() {
  this.listData.push(this.userForm.value);
  this.userForm.reset();
}



removeItem(element:any) {
  this.listData.forEach((value:any,index:any)=>{
    if(value == element)
    this.listData.splice(index,1)
  });

}

selectFile(event:any) {
  if(event.target.files){
    for(let i=0; i<File.length; i++){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.onload=(events:any)=>{
        this.urls.push();
      }
    }
  }
}

urls : string[] = [];
onSelectFile(event:any) {
  if (event.target.files && event.target.files[0]) {
      var file = event.target.files;
      for (let i = 0; i < file.length; i++) {
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[i]);
              reader.onload = (event:any) => {
                 this.urls.push(event.target.result); 
              }  
      }
    } 
}

}
