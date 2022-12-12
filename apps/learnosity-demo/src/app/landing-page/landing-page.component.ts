/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from '@angular/core';
import { AssesmentService } from '../services/assesments.service';
declare let LearnosityItems: any;

@Component({
  selector: 'learnosity-demo-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  items: any;
  isloadAssesment = false;
  activityId = '3bcd2221-9ab9-4906-9b4b-5e6f0852d32a';

  constructor(private learnService: AssesmentService) { }

  getActivity() {
    this.learnService.getData().subscribe(data => {
      this.items = data;
    });
  }

  loadAssesment(items: any) {
    items=items.map((item:any) =>item.id)
    this.isloadAssesment = true;
    this.learnService.AssesmentbyItemIds(this.activityId, items).subscribe((sessionInitObj) => {
      LearnosityItems.init(sessionInitObj, {
        readyListener() {
          console.log(
            `Learnosity Initialization of assessment is ready!`
          );
        },
        errorListener(err: unknown) {
          console.log('error', err);
          this.isloadAssesment = false;
        },
      })
    })
  }
  loadItems(id:string) {
    this.learnService.getItems(id).subscribe(data=>{
      console.log(data);
      
    })
  }
}
