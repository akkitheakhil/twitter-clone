import { Observable, shareReplay, take, map } from 'rxjs';
import { FirebaseAuthService } from '../../core/services/firebase-auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseTweetsService {

  postDocumentRef$!: AngularFirestoreCollection<any>;
  postTweet$!: Observable<any>;
  constructor(private readonly afs: AngularFirestore, private afAuth: FirebaseAuthService) {
    afAuth.getFirebaseUserState().pipe(map(user => {
      if (user) {
        this.postDocumentRef$ = this.afs.collection(`tweets`, ref =>
          ref.orderBy('createdAt', 'desc'));
      }
    }), take(1)).subscribe();
  }

  postTweets(tweet: any) {
    return this.postDocumentRef$.add(tweet);
  }

  getAllTweets() {
    return this.postDocumentRef$.valueChanges();
  }
}
