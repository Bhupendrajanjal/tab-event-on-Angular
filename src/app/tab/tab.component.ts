import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ShowFrameWorkProcut:string ='css'

  Sowboxframework:string=''
  box:string=`Click On Box `

  onToggleButton(eve : string){
    this.ShowFrameWorkProcut = eve
  }

  OnBoxClick(boxn : string){
    this.Sowboxframework = boxn
  }
}
