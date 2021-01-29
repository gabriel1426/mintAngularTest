import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  subjects : any = [    
    {id: 2, instructor:'Leanne Graham',subjects:'Mathematics', descriptions:[{ description : '7 years xp'},{ description : 'Energic'},{ description : 'Lost of Homework'}], mainBackground : '#D4DBEC', secondBackground:'#556FB5'},
    {id: 1, instructor:'Ervin Howell',subjects:'Drawing ', descriptions:[{ description : '8 years xp'},{ description : 'Friendly'},{ description : 'Story taller'}], mainBackground : '#BFBFBF', secondBackground:'#717171'},
    {id: 5, instructor:'Clementine Bauch', subjects:'Music', descriptions:[{ description : '3 years xp'},{ description : 'political'},{ description : 'Random quizzer'}], mainBackground : '#BFBFBF', secondBackground:'#717171'},
    {id: 3, instructor:'Patricia Lebsack',subjects:'Reinforcement', descriptions:[{ description : '8 years xp'},{ description : 'Energic'},{ description : 'Lost of Homework'}], mainBackground : '#BFBFBF', secondBackground:'#717171'},
    {id: 4, instructor:'Chelsey Dietrich',subjects:'Drawing', descriptions:[{ description : '7 years xp'},{ description : 'Friendly'},{ description : 'Random quizzer'}], mainBackground : '#BFBFBF', secondBackground:'#717171'},
    {id: 1, instructor:'Mrs. Dennis Schulist',subjects:'Mathematics', descriptions:[{ description : '5 years xp'},{ description : 'political'},{ description : 'Story taller'}], mainBackground : '#BFBFBF', secondBackground:'#717171'},
    {id: 2, instructor:'Kurtis Weissnat',subjects:'Mathematics', descriptions:[{ description : '10 years xp'},{ description : 'Friendly'},{ description : 'Lost of Homework'}], mainBackground : '#BFBFBF', secondBackground:'#717171'},
    {id: 5, instructor:'Nicholas Runolfsdottir V', subjects:'Computer Science', descriptions:[{ description : '2 years xp'},{ subjects : 'Energic'},{ description : 'Story taller'}], mainBackground : '#BFBFBF', secondBackground:'#717171'},
    {id: 3, instructor:'Glenna Reichert', subjects:'Chemistry ', descriptions:[{ description : '6 years xp'},{ description : 'EnFriendlyergic'},{ description : 'Lost of Homework'}], mainBackground : '#BFBFBF', secondBackground:'#717171'},
    {id: 4, instructor:'Clementina DuBuque', subjects:'Economics ', descriptions:[{ description : '4 years xp'},{ description : 'political'},{ description : 'Random quizzer'}], mainBackground : '#BFBFBF', secondBackground:'#717171'},
  ];

  constructor() {
   }

  ngOnInit(): void {
  }

 

}
