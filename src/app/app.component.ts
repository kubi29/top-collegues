import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue';
import {CollegueService } from './shared/service/collegue.service';
import {Subject} from 'rxjs/Subject'
import {debounceTime} from 'rxjs/operator/debounceTime'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  collegues:Collegue []
  private _success = new Subject<string>()
  successMessage: string  
  title = 'app';
  staticAlertClosed = false
  
  constructor(public collegueService:CollegueService){

  }
  
  ngOnInit() {
   
 
    this.collegueService.listerCollegues().then( (result) => { this.collegues=result
  });


      setTimeout(() => this.staticAlertClosed = true, 20000);
      
              this._success.subscribe((message) => this.successMessage = message);
      
              debounceTime.call(this._success, 5000).subscribe(() => this.successMessage = null);
  }

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement){

    
   
    const col = new  Collegue(pseudo.value,imageUrl.value,0);
   
    this.collegueService.sauvegarder(col).then(collegue =>{
    
      this.collegues.push(collegue)
      this._success.next(`Le collègue ${pseudo.value} a été ajouté avec succès`)
      
          pseudo.value = ''
          imageUrl.value = ''
    })
    
    return false

  }

}
