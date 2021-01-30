import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  section:string;

  elementToRead: any = [  
    {
      section:'',
      categories:
      [
        {
          name:'',
          items:[]
        },       
      ]
    }
  ];

  instructors : any = [    
    {
      section:'Instructor',
      categories:
      [
        {
          name:'Subject',
          items:['Mathematics','Biologi','Art Theory']
        },
        {
          name:'Status',
          items:['Available','Fully booked','On holiday']
        },
        {
          name:'Experience',
          items:['0 - 15 Years','5 - 10 Years','10 - 15 Years']
        },
        {
          name:'Location',
          items:['Kiel, SH','Stuttgart, BW','Munich, BY']
        }        
      ]
    }
  ];

  subjects : any = [    
    {
      section:'Subject',
      categories:
      [
        {
          name:'Focus',
          items:['Mathematics','Biologi','Art Theory']
        },
        {
          name:'Status',
          items:['Available','Fully booked','On holiday']
        },
        {
          name:'Location',
          items:['Kiel, SH','Stuttgart, BW','Munich, BY']
        }        
      ]
    }
  ];

  events : any = [    
    {
      section:'Events',
      categories:
      [
        {
          name:'Focus',
          items:['Mathematics','Biologi','Art Theory']
        },
        {
          name:'Time',
          items:['Morning','After noon','Evening']
        },
        {
          name:'Location',
          items:['Kiel, SH','Stuttgart, BW','Munich, BY']
        }        
      ]
    }
  ];

  constructor(private actRoute: ActivatedRoute, private modalService: NgbModal) {
    let section:string = this.actRoute.snapshot.url.toString();
    this.showSideBarSection(section);
   }

  ngOnInit(): void {
  }

  showSideBarSection(section : string){
    
    switch(section){

        case 'instructors':
            this.elementToRead = this.instructors;
        break;
        case 'subjects':
          this.elementToRead = this.subjects;
        break;
        case 'calendar':
          this.elementToRead = this.events;
        break;
    }
    this.section=section;
  }

  openModal(content) {
    if(this.section=='calendar'){
      this.modalService.open(content, { centered: true });
    }    
  }

}
