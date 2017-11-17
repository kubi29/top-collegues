import { Component, OnInit ,Input} from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

 
  
  constructor(public  collegueService:CollegueService) { }

  ngOnInit() {
  }

  jaime(collegue:Collegue) {
    
    this.collegueService.aimerUnCollegue(collegue).then(result => collegue=result)

    }
    jedeteste(collegue:Collegue) {
   
    this.collegueService.detesterUnCollegue(collegue).then(result => collegue=result)
    }

}
