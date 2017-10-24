import { GalleryImage } from './models/galleryImage.model';
import { Upload } from './models/upload.model';
import { Injectable } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {
  private basepath = '/uploads';
  private uploads: FirebaseListObservable<GalleryImage[]>;

  constructor(private ngFire: AngularFireModule, private db: AngularFireDatabase) { }

  uploadFile(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basepath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,

    (snapshot) => {
      upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
    },
    (error) => {
      console.error(error);
    },
    (): any => {
      upload.url = uploadTask.snapshot.downloadURL;
      upload.name = upload.file.name;
      this.saveFileData(upload);
    }
  );
  }

  private saveFileData(upload: Upload) {
    this.db.list(`${this.basepath}/`).push(upload);
  }

  deleteFile(upload: Upload) {
    this.deleteFileData(upload.$key).then(() => {
      this.deleteFileStorage(upload.name);
    }).catch((error) => console.error(error));
  }

  private deleteFileData(key: string) {
    return  this.db.list(`${this.basepath}/`).remove(key);
  }

  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basepath}/${name}`).delete();
  }

}
