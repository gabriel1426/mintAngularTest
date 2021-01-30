import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  dayList = new Array();
  hoursList = new Array();
  selectedDayId:number = 0;

  instructors : any = [    
    {id: 1, instructor:'Leanne Graham',subjects:'Mathematics', mainBackground : '#556FB5', items:[{top:'3.125rem',left:'25px'},{top:'3.125rem',left:'600px'},{top:'3.125rem',left:'1200px'}],photo : "https://images.generated.photos/GRiWGc3a-BTeuzM2U3q9XG3rQRl3fWKHqoa8lcvSt3E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzAy/ODgwOTAuanBn.jpg"},    
    {id: 2, instructor:'Patricia Lebsack',subjects:'Reinforcement',  mainBackground : '#4698A7', items:[{top:'10rem',left:'5px'}, {top:'10rem',left:'490px'},{top:'10rem',left:'950px'}],photo : "https://images.generated.photos/s5epM3bjfTaQd_UcuUtQhdB2OzD-RUH6b7QZjxm_hk8/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzAy/NTc3MTEuanBn.jpg"},        
    {id: 3, instructor:'Kurtis Weissnat',subjects:'Computer Scienc', mainBackground : '#9B55B5', items:[{top:'16.875rem',left:'250px'},{ top:'16.875rem',left:'680px'},{top:'16.875rem',left:'1200px'}],photo : "https://images.generated.photos/zNIdreaCccIbkRoY4Y01COt5jNagbgIsO6ZQflOZf8k/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzAy/ODkwNzQuanBn.jpg"},        
    {id: 4, instructor:'Clementina DuBuque', subjects:'Music ', mainBackground : '#B59B55', items:[{top:'23.75rem',left:'120px'},{top:'23.75rem',left:'580px'},{top:'23.75rem',left:'1050px'}], photo : "https://images.generated.photos/MR90qUogyz-pOXiorpTiq6gMdOUxU1nAewh2RcxqQBQ/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzAx/OTUwODAuanBn.jpg"},        
    {id: 5, instructor:'Glenna Reichert', subjects:'Economics ', mainBackground : '#E4508F', items:[{top:'30.625rem',left:'15px'},{top:'30.625rem',left:'720px'},{top:'30.625rem',left:'1350px'}], photo : "https://images.generated.photos/UpGZaQ26IwGlA-aDw5_P6Q_tmaJsKgBiSwI24hMrTeQ/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAzOTk0OTAuanBn.jpg"},    
  ];

  constructor() { 
    this.generatArrayDays();
    this.generateArrayHours();
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

  generateArrayHours(){
    for (let index = 0; index < 60; index++) {
      this.hoursList.push({'id':index})
    }
  }
  
  selectedDay(day: any){
    this.selectedDayId = day;

    console.log(day);
  }

}
