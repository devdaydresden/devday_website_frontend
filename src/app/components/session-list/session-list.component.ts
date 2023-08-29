// session-list.component.ts
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SessionResults } from "src/app/interfaces/session.interface";
import { fakePretalxTalks } from "src/app/mocks/APITalks";
import { SessionService } from "src/app/services/session.service";

@Component({
  selector: "dd-session-list",
  templateUrl: "./session-list.component.html",
  styleUrls: ["./session-list.component.scss"]
})

export class SessionListComponent implements OnInit {

  talks$: Observable<SessionResults[]>;
  groupedSessions: SessionResults[][] = [];

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.talks$ = this.sessionService.getAllSessions();
    this.groupedSessions = this.sessionService.getGroupedSessions();
  }

  getSessionForRoom(group: SessionResults[], room: string): SessionResults {
    const foundSession = group.find(session => session.slot.room === room);
    if (foundSession) {
      return foundSession;
    } else {
      return null;
    }
  }

}