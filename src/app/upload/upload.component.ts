import { UploadService } from './../upload.service';
import { Upload } from './../models/upload.model';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  files: FileList;
  upload: Upload;
  constructor(private uploadService: UploadService) { }

 uploadFiles() {
  const filesToUpload = this.files;
  const filesIdx = _.range(filesToUpload.length);
  _.each(filesIdx, (idx) => {
    this.upload = new Upload(filesToUpload[idx]);
    this.uploadService.uploadFile(this.upload);
  });
 }

 handleFiles(event) {
  this.files = event.target.files;
 }

}
