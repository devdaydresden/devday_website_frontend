import { Component, Input } from '@angular/core';

@Component({
  selector: 'dd-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  @Input() galleryData : GalleryData;
  @Input()
  public set galleryjson(value: string) {
    this.galleryData = JSON.parse(value) as GalleryData;
  }
}

interface GalleryData {
  previews: string[],
  links: string[],
  columns: number,
  alttexts: string[]
}
