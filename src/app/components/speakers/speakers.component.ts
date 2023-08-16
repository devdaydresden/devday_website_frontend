
import { Component, OnInit } from '@angular/core';
import { SpeakerService } from '../../services/speaker.service';
import { tap } from 'rxjs/operators';
import { Speaker } from './speaker.interface';
import { ButtonType } from '../button/button.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})

export class SpeakersComponent implements OnInit {
  showAll = false;
  ButtonType = ButtonType;

  allSpeakers$: Observable<Speaker[]>;

  constructor(private speakerService: SpeakerService) { }

  ngOnInit(): void {
    this.allSpeakers$ = this.speakerService.getAllSpeakers()
  }


  toggleShowMore() {
    this.showAll = !this.showAll;
  }

  showSpeakerDetails(code: string): void {
    console.log(code);
  }

}