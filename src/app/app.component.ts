import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data=[{state:"edit",name:'Joe'},{state:"edit",name:'Brown'},{state:"edit",name:'Cronos'}];
  
  edit(index,state){
    if(state == 'save'){
       this.data[index].state='edit'; 
    }
    else
      this.data[index].state='save';
  }
}
