import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Session, SessionResults, SessionSpeaker, Slot } from "../interfaces/session.interface";
import { fakePretalxTalks } from "../mocks/APITalks";


@Injectable({
    providedIn: "root"
})

export class SessionService {

    private _url: string = "pretax";
    private mappedSession: SessionResults[] = [];

    constructor(private http: HttpClient) {
        this.mappedSession = fakePretalxTalks.results.map(this.mapSession);
    };


    private mapSession = (apiSession: any): SessionResults => {
        return {
            code: apiSession.code,
            speakers: apiSession.speakers.map(this.mapSessionSpeaker),
            title: apiSession.title,
            submission_type: apiSession.submission_type,
            submission_type_id: apiSession.submission_type_id,
            state: apiSession.state,
            abstract: apiSession.abstract,
            description: apiSession.description,
            duration: apiSession.duration,
            do_not_record: apiSession.do_not_record,
            is_featured: apiSession.is_featured,
            content_locale: apiSession.content_locale,
            slot: this.mapSlot(apiSession.slot),
            answers: apiSession.answer,
            notes: apiSession.notes,
            internal_notes: apiSession.internal_notes,
            tags: apiSession.tags,
            tag_ids: apiSession.tags_ids
        };

    };

    private mapSessionSpeaker = (apiSessionSpeaker: SessionSpeaker): SessionSpeaker => ({
        name: apiSessionSpeaker.name,
        code: apiSessionSpeaker.code,
        biography: apiSessionSpeaker.biography
    });

    private mapSlot = (apiSlot: Slot): Slot => ({
        start: apiSlot.start,
        end: apiSlot.end,
        room: apiSlot.room,
        room_id: apiSlot.room_id
    });

    public getAllSessions = (): Observable<SessionResults[]> => {
        return of(this.mappedSession);
    };

    public getSession = (code: string): Observable<SessionResults> => {
        const session = this.mappedSession.find(s => s.code === code);
        return of(session);
    };

    public getSessionsBySpeaker = (speakerCode: string): Observable<SessionResults[]> => {
        const sessions = this.mappedSession.filter(s => s.speakers.some(speaker => speaker.code === speakerCode));
        console.log("finded service:",sessions);
        return of(sessions);
    };


    public getGroupedSessions(): SessionResults[][] {
        // bspl { "11:30": [{Session1},{Session2}...], ...}
        const groupedSessions: any = {};
        this.mappedSession.forEach(session => {
            // same start time for different sessions
            const time = session.slot.start;
            //If time hasn't been added yet --> push el.
            if (groupedSessions[time]) {
                groupedSessions[time].push(session);
            } else {
                groupedSessions[time] = [session];
            }
        });
        // [[Sessions1,Session2], [Session3]]
        return Object.values(groupedSessions);
    }

}

