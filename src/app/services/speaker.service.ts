import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Answer, Availability, Speaker } from "../components/speakers/speaker.interface";
import { fakePretalx } from "../components/speakers/APISpeakers";


@Injectable({
    providedIn: "root"
})
export class SpeakerService {

    private _url: string = "pretax";

    constructor(private http: HttpClient) { };

    // Mapping function for Availability
    mapAvailability = (apiAvailability: any): Availability => ({
        id: apiAvailability.id,
        start: apiAvailability.start,
        end: apiAvailability.end,
        allDay: apiAvailability.allDay
    });

    // Mapping function for Answer
    mapAnswer = (apiAnswer: any): Answer => ({
        question: apiAnswer.question,
        answer: apiAnswer.answer
    });

    // Mapping function for Speaker
    mapSpeaker = (apiSpeaker: any): Speaker => {

        //may need to be checked upon receipt of the object from the server
        // const availabilities = Array.isArray(apiSpeaker.availabilities)
        //     ? apiSpeaker.availabilities.map(this.mapAvailability)
        //     : [];
        // const answers = Array.isArray(apiSpeaker.answers)
        //     ? apiSpeaker.answers.map(this.mapAnswer)
        //     : [];
        // return {
        //     availabilities: availabilities,
        //     answers: answers

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

        mappedSpeakers: Speaker[] = fakePretalx.results.map(this.mapSpeaker);

        getAllSpeakers = (): Observable<Speaker[]> => {
            // return this.http.get<Speaker[]>(this._url);
            return of(this.mappedSpeakers);
        };

        getSpeakerDetails = (code: string): Observable<Speaker> => {
            // return this.http.get<Speaker>(this._url + "/" + id);
            const speaker = this.mappedSpeakers.find(s => s.code === code);
            return of(speaker);
        };

    }

