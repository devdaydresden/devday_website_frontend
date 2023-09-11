import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionResults } from 'src/app/interfaces/session.interface';
import { Speaker } from 'src/app/interfaces/speaker.interface';
import { SessionService } from 'src/app/services/session.service';
import { SpeakerService } from 'src/app/services/speaker.service';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.scss']
})
export class SpeakerDetailsComponent {
  speaker: Speaker;
  sessions: SessionResults[] = [];

  constructor(private route: ActivatedRoute, private speakerService: SpeakerService, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const speakerCode = params.get('speakerCode');
      this.speakerService.getSpeakerDetails(speakerCode).subscribe(speaker => {
        this.speaker = speaker;
      });
      this.sessionService.getSessionsBySpeaker(speakerCode).subscribe(sessions => {
        this.sessions = sessions;
        console.log("finded:",this.sessions);
    });
    });

  }
}
