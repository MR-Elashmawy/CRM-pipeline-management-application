import { Component, ElementRef,Renderer2,OnInit } from '@angular/core';
import {ProjectservicesService} from '../service/projectservices.service';
import { CdkDragDrop,moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})

export class HeadingComponent implements OnInit {

  constructor(private _service:ProjectservicesService,private elementRef: ElementRef, private renderer: Renderer2) { }

  headingDisplay:any = [];
  searchText!:string;
  portential_value:any;
  focus:any;
  Contact_Made:any;
  Offer_Sent:any;
  Getting_Ready:any;
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
    // setTimeout(()=>{
    //   const elementPotential = this.elementRef.nativeElement.querySelector('.Potential_Value');
    //   this.portential_value = elementPotential.className.split(" ").at(0).split("_").join(" ");
    //   const elementFocus = this.elementRef.nativeElement.querySelector('.Focus');
    //   this.focus = elementFocus.className.split(" ").at(0).split("_").join(" ");
    //   const elementContact = this.elementRef.nativeElement.querySelector('.Contact_Made');
    //   this.Contact_Made = elementContact.className.split(" ").at(0).split("_").join(" ");
    //   const elementOffer = this.elementRef.nativeElement.querySelector('.Offer_Sent');
    //   this.Offer_Sent = elementOffer.className.split(" ").at(0).split("_").join(" ");
    //   const elementGetting = this.elementRef.nativeElement.querySelector('.Getting_Ready');
    //   this.Getting_Ready = elementGetting.className.split(" ").at(0).split("_").join(" ");
    // },1000);
  }
}

