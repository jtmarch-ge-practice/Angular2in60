import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>{{name}} </h1>

  <p><strong>Email:</strong> {{email}} </p>
  <p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}}</p>

  <button (click) = "toggleHobbies()"> {{showHobbies ? "Hide Hobbies" : "Show Hobbies"}} </button>

  <div *ngIf = "showHobbies">
  <h3>Hobbies</h3>

  <ul>
    <li *ngFor="let hobby of hobbies">
    {{hobby}}
    </li>
  </ul>
</div>

<form>
    <label>Name: </label><br/>
    <input type = "text" name = "name" [(ngModel)]= "name" />
</form>
  `,
})


export class UserComponent  {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;



constructor () {

  this.name = 'Hulk Smash user component';
  this.email = 'hulk.smash@gmail.com',
  this.address = {
  street: '12 Main St',
  city: 'Boston',
  state: 'MA'
  //this.name = 'Sam Smith'
  //console.log('constructor ran');
      }

this.hobbies = ['Music', 'Movies', 'Sports'];
this.showHobbies = false;

              }

toggleHobbies() {
    if(this.showHobbies==true) {
        this.showHobbies = false;
    } else {
          this.showHobbies = true;
}//end else
}//end toggleHobbies

}  //end class UserComponent




interface address {
  street: string;
  city: string;
  state: string;
}
