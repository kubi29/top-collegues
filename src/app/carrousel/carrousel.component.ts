import { Component, OnInit , Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { UnCollegueComponent } from '../un-collegue/un-collegue.component'

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent extends UnCollegueComponent  implements OnInit  {
  
    @Input() collegues:Collegue [];
    
    constructor(collegueService:CollegueService){ super(collegueService);
  
    }
  
    ngOnInit() { this.collegueService.listerCollegues().then( (result) => { this.collegues=result
    })
    }

}
