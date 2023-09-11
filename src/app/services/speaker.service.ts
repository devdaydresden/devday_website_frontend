import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Answer, Availability, Speaker } from "../interfaces/speaker.interface";
import {fakePretalxSpeaker } from "../mocks/APISpeakers";


@Injectable({
    providedIn: "root"
})
export class SpeakerService {

    private _url: string = "pretax";
    private mappedSpeakers: Speaker[] = [];

    constructor(private http: HttpClient) {
        this.mappedSpeakers =fakePretalxSpeaker.results.map(this.mapSpeaker);
    };

    // Mapping function for Availability
    private mapAvailability = (apiAvailability: any): Availability => ({
        id: apiAvailability.id,
        start: apiAvailability.start,
        end: apiAvailability.end,
        allDay: apiAvailability.allDay
    });

    // Mapping function for Answer
    private mapAnswer = (apiAnswer: any): Answer => ({
        question: apiAnswer.question,
        answer: apiAnswer.answer
    });

    // Mapping function for Speaker
    private mapSpeaker = (apiSpeaker: any): Speaker => {
        return {
            code: apiSpeaker.code,
            name: apiSpeaker.name,
            biography: apiSpeaker.biography,
            submissions: apiSpeaker.submissions,
            avatar: apiSpeaker.avatar,
            email: apiSpeaker.email,
            availabilities: apiSpeaker.availabilities.map(this.mapAvailability),
            answers: apiSpeaker.answers.map(this.mapAnswer)
        };

    };


    public getAllSpeakers = (): Observable<Speaker[]> => {
        // return this.http.get<Speaker[]>(this._url);
        return of(this.mappedSpeakers);
    };

    public getSpeakerDetails = (code: string): Observable<Speaker> => {
        // return this.http.get<Speaker>(this._url + "/" + id);
        const speaker = this.mappedSpeakers.find(s => s.code === code);
        return of(speaker);
    };

}

