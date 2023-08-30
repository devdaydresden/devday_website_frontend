import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'dd-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  
})

export class GalleryComponent {
  [x: string]: any;

  @Input() galleryData: GalleryData = {
    previews: [],
    links: [],
    columns: 0,
    alttexts: []
  };
  @Input()
  public set galleryjson(value: string) {
    this.galleryData = JSON.parse(value) as GalleryData;
  }

  previewImages = false;
  showMask = false;
  currentLightboxImage = this.galleryData.previews[0];
  currentLightboxImageIndex = 0;
  controls = true;
  totalImagesCount = 0;
  alttexts = '';

  constructor() {
    this.galleryData = {
      previews: [
        'https://devday.webdesign-elbflorenz.de/wp-content/uploads/2023/07/fayette-reynolds-zmBdWQL7L4-unsplash-150x150.jpg',
        'https://devday.webdesign-elbflorenz.de/wp-content/uploads/2023/07/fayette-reynolds-4o-mbzx3TvU-unsplash-150x150.jpg',
        'https://devday.webdesign-elbflorenz.de/wp-content/uploads/2023/07/fayette-reynolds-zmBdWQL7L4-unsplash-150x150.jpg',
        'https://devday.webdesign-elbflorenz.de/wp-content/uploads/2023/07/fayette-reynolds-4o-mbzx3TvU-unsplash-150x150.jpg',
      ],
      links: [
        'https://devday.webdesign-elbflorenz.de/wp-content/uploads/2023/07/fayette-reynolds-4o-mbzx3TvU-unsplash-scaled.jpg',
        'https://devday.webdesign-elbflorenz.de/wp-content/uploads/2023/07/fayette-reynolds-zmBdWQL7L4-unsplash-scaled.jpg',
        'https://devday.webdesign-elbflorenz.de/wp-content/uploads/2023/07/fayette-reynolds-4o-mbzx3TvU-unsplash-scaled.jpg',
        'https://devday.webdesign-elbflorenz.de/wp-content/uploads/2023/07/fayette-reynolds-zmBdWQL7L4-unsplash-scaled.jpg',
      ],
      columns: 4,
      alttexts: [
        'Image 1 Alt Text',
        'Image 2 Alt Text',
      ]
    };
  }

  ngOnInit(): void {
    this.totalImagesCount = this.galleryData.previews.length;
  }

  onPreviewClick(index: number) {
    this.showMask = true;
    this.previewImages = true;
    this.currentLightboxImageIndex = index;
    this.currentLightboxImage = this.galleryData.links[index];
    this.alttexts = this.galleryData.alttexts[index];
  }

  onAnimationDone(event: any) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreviewClick() {
    this.previewImages = false;
    this.showMask = false;

  }
  prev(){
    if(this.currentLightboxImageIndex > 0){
      this.currentLightboxImageIndex--;
      this.currentLightboxImage = this.galleryData.links[this.currentLightboxImageIndex];
      this.alttexts = this.galleryData.alttexts[this.currentLightboxImageIndex];
    }
  }
  next(){
    if(this.currentLightboxImageIndex < this.totalImagesCount - 1){
      this.currentLightboxImageIndex++;
      this.currentLightboxImage = this.galleryData.links[this.currentLightboxImageIndex];
      this.alttexts = this.galleryData.alttexts[this.currentLightboxImageIndex];
    }
  }
}

export interface GalleryData {
  previews: string[],
  links: string[],
  columns: number,
  alttexts: string[]
}
