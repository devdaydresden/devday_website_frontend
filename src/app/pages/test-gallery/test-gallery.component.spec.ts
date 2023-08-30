import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGalleryComponent } from './test-gallery.component';

describe('TestGalleryComponent', () => {
  let component: TestGalleryComponent;
  let fixture: ComponentFixture<TestGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestGalleryComponent]
    });
    fixture = TestBed.createComponent(TestGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
