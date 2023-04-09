import { Component,OnInit } from '@angular/core';
import {ProjectservicesService} from '../service/projectservices.service';
import { CdkDragDrop,moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})

export class HeadingComponent implements OnInit {

  constructor(private _service:ProjectservicesService) { }

  headingDisplay:any = [];
  searchText!:string;
  static val :any;
  onChange(event:any) {
    HeadingComponent.val = event.target.value;
    console.log(HeadingComponent.val);
  }
  onDrop(event: CdkDragDrop<string []>,boxStat:string){
    if(event.previousContainer === event.container){
          moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
        );
      }else{
          // const item = event.previousContainer.data[event.previousIndex];
          // console.log(item);
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex
            );
            this.headingDisplay[event.currentIndex].status = boxStat;
          // console.log(this.headingDisplay[event.currentIndex].status);
    }
  }
  ngOnInit(): void {
    this._service.heading().subscribe((result)=>{
      console.log(result);
      this.headingDisplay = result.deals;
    })
  }
}

