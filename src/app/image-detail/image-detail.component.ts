import { UploadService } from './../upload.service';
import { Upload } from './../models/upload.model';
import { ImageService } from './../image.service';
import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  private imageUrl = '';
 @Input() upload: Upload;

  constructor(private imageService: ImageService, private route: ActivatedRoute, private router: Router,
  private uploadService: UploadService) { }

  ngOnInit() {
    this.getImageUrl(this.route.snapshot.params['id']);
  }

  getImageUrl(key: string) {
    this.imageService.getImage(key)
      .then(image => this.imageUrl = image.url);
  }

  delete(upload) {
    this.uploadService.deleteFile(this.upload);
  }



}
