import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssesmentService } from '../services/assesments.service';
declare let LearnosityItems: any;

@Component({
  selector: 'learnosity-demo-assesment-display-page',
  templateUrl: './assesment-display-page.component.html',
  styleUrls: ['./assesment-display-page.component.scss'],
})
export class AssesmentDisplayPageComponent implements OnInit{
  constructor(private route: ActivatedRoute,private assesmentService: AssesmentService) {}
  ngOnInit(): void {
    const assessmentId = this.route.snapshot.paramMap.get('id') ?? '';
    this.assesmentService.getAssesment(assessmentId).subscribe((sessionInitObj) => {
			LearnosityItems.init(sessionInitObj, {
				readyListener() {
					console.log(
						`Learnosity Initialization of assessment "${assessmentId}" is ready!`
					);
				},
				errorListener(err: unknown) {
					console.log('error', err);
				},
			});
		})    
  }
}
