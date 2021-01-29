import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  dayList = new Array();
  selectedDayId:number = 0;

  constructor() { 
    this.generatArrayDays();
  }

  ngOnInit(): void {
  }

  generatArrayDays(){
    let startday:number = 14;
    let id:number = 0;
    for (let i = 0; i < 4; i++) {      
      for (let j = 0; j < 7; j++) {        
        switch(j){
          case 0:
            this.dayList.push({'day':'Mon', 'number':startday,'id':id+j})
            startday++;
          break;
          case 1:
            this.dayList.push({'day':'Tue', 'number':startday, 'id':id+j})
            startday++;
          break;
          case 2:
            this.dayList.push({'day':'Wed', 'number':startday, 'id':id+j})
            startday++;
          break;
          case 3:
            this.dayList.push({'day':'Thu', 'number':startday, 'id':id+j})
            startday++;
          break;
          case 4:
            this.dayList.push({'day':'Fri', 'number':startday, 'id':id+j})
            startday++;
          break;
          case 5:
            this.dayList.push({'day':'Sat', 'number':startday, 'id':id+j})
            startday++;
          break;
          case 6:
            this.dayList.push({'day':'Sun', 'number':startday, 'id':id+j})
            startday++;
          break;  
        }      
      }
      id = id+7;
    }
  }

  selectedDay(day: any){
    this.selectedDayId = day;

    console.log(day);
  }

}
