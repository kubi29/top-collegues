import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service'
import { UnCollegueComponent } from '../un-collegue/un-collegue.component'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent extends UnCollegueComponent implements OnInit {

  collegue:Collegue
  nom: string;
  
  
  
    constructor(private route: ActivatedRoute, collegueService: CollegueService) {
  
      super(collegueService)
      route.params.subscribe(params => { this.nom = params['nom']; });
  
    }
  
    ngOnInit() {
  
      this.collegueService.listerCollegues().then(collegues=>this.collegue = collegues.find(c=>c.nom == this.nom));
  
    }

}
