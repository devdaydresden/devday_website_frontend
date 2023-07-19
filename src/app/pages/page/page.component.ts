import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'dd-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  public content: SafeHtml = '';
  private sub: any;


  constructor(
    private contentService: ContentService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,) {

  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.contentService.getContent(params['id']).subscribe((data) => {
        this.content = this.sanitizer.bypassSecurityTrustHtml(data.content.rendered)
      });
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
