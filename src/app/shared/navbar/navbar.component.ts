import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  instructors :boolean = true;
  subjects :boolean = false;
  calendar :boolean = false;
  students :boolean = false;
  

  constructor(private router: Router,private actRoute: ActivatedRoute) { 
    let section:string = this.actRoute.snapshot.url.toString()
    console.log(section)
  }

  ngOnInit(): void {
  }

  selectNavOption(item : any){
      switch(item){
        case 'instructors':
          this.instructors = true;
          this.subjects = this.calendar = this.students = false;
          break;
        case 'subjects':
          this.subjects = true;
          this.instructors = this.calendar = this.students = false;
          break;
        case 'calendar':
          this.calendar = true;
          this.instructors = this.students = this.subjects = false;
          break;
        case 'Students':
          this.students = true;
          this.instructors = this.subjects = this.calendar = false;
          break;  
      }
      this.router.navigate(['/' + item])
  }
}
