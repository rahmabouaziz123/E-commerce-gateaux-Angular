import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  source= "../assets/images/imgcontact.jpg";
  img="alt";
  title="";
  visibility= "hidden";

  toggleDisplayMap(){
    // this.visibility= "visible";
    if (this.visibility=="hidden") {
      this.visibility= "visible";
    }
    else{
      this.visibility= "hidden"
    }

    

  }

}
