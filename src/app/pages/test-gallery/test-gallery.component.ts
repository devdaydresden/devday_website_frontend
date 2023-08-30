import { Component } from '@angular/core';
import { GalleryData } from '../../gallery/gallery.component'; // Импортируйте интерфейс GalleryData

@Component({
  selector: 'app-test-gallery',
  templateUrl: './test-gallery.component.html',
  styleUrls: ['./test-gallery.component.scss']
})
export class TestGalleryComponent {

  galleryDataMock: GalleryData = {
    previews: [
      'https://devday.webdesign-elbflorenz.de/wp-content/uploads/2023/07/fayette-reynolds-zmBdWQL7L4-unsplash-150x150.jpg',
      'https://devday.webdesign-elbflorenz.de/wp-content/uploads/2023/07/fayette-reynolds-4o-mbzx3TvU-unsplash-150x150.jpg',
    ],
    links: [
      'https://devday.webdesign-elbflorenz.de/wp-content/uploads/2023/07/fayette-reynolds-4o-mbzx3TvU-unsplash-scaled.jpg',
      'https://devday.webdesign-elbflorenz.de/wp-content/uploads/2023/07/fayette-reynolds-zmBdWQL7L4-unsplash-scaled.jpg',
    ],
    columns: 2,
    alttexts: [
      'Image 1 Alt Text',
      'Image 2 Alt Text',
    ]
  };
}
