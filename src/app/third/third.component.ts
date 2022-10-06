import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  urls : string[] = [];
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.urls.push(event.target.result); 
                }
                
                reader.readAsDataURL(event.target.files[i]);
        }
      } 
  }
  remove(){
    this.urls.splice(0,1);
  }

}
