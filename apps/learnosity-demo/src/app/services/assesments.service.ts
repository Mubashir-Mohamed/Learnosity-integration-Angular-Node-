/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { v4: uuidv4 } = require('uuid');



@Injectable({ providedIn: "root" })

export class AssesmentService {

	rootURL = '/api';
	constructor(private http: HttpClient) {

	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	getAssesment(assesmentId: string) {
		const userId = uuidv4();
		const sessionId = uuidv4();
		return this.http.get(this.rootURL +
			`/learnosity?assessmentId=${assesmentId}&sessionId=${sessionId}&userId=${userId}`,
		);
	}
	getData() {
		const userId = uuidv4();
		return this.http.get(this.rootURL +
			`/learnosity/data?userId=${userId}`,
		).pipe(map((res:any)=> res['data']));
	}
	AssesmentbyItemIds(activityId:string,items:any) {
		console.log(items);
		const userId = uuidv4();
		const sessionId = uuidv4();
		return this.http.post(this.rootURL +
			`/learnosity/assesmentByItemsId?activityId=${activityId}&sessionId=${sessionId}&userId=${userId}`,items
		);
	}
	getItems(activityId:string) {
		console.log(activityId);
		
		const userId = uuidv4();
		return this.http.get(this.rootURL +
			`/learnosity/itemsByActivityId?activityId=${activityId}&userId=${userId}`
		);
	}
}