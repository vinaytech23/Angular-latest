import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'propertybinding';

  private girl = {
    name : "taylot swift",
    gender : "f",
    image : "/assets/images/female.jpg"
  };
  private boy = {
    name : "Enrique Igliasis",
    gender : "m",
    image : "/assets/images/male.jpg"
  };
  private person = this.boy;




}
