import { Component, OnInit , Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { UnCollegueComponent } from '../un-collegue/un-collegue.component';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent extends UnCollegueComponent implements OnInit {

  size:number ;
  filtre:string  ="";
  @Input() collegues:Collegue [];
  
  constructor(collegueService:CollegueService){ super(collegueService);

  }

  ngOnInit() { this.collegueService.listerCollegues().then( (result) => { this.collegues=result
  })
   
  }

  limite($event){
    
        
        this.size = $event.target.value
      }
    
      filtrePseudo($event){
       this.filtre = $event.target.value
      }

}
