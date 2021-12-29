import { Injectable } from '@angular/core';
import { Observable, map, take, shareReplay, tap, of, Subject, takeUntil } from 'rxjs';
import { isEmptyData } from '../../shared/utils/common.utils';
import { UserProfile } from '../../core/models/user-profile.model';
import { FirebaseAuthService } from '../../core/services/firebase-auth.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseProfileService {

  private userDocs!: AngularFirestoreDocument<UserProfile>;
  userProfile!: Observable<UserProfile | undefined>;

  constructor(private readonly afs: AngularFirestore, private afAuth: FirebaseAuthService) {
    afAuth.getFirebaseUserState().pipe(map(user => {
      console.log('user', user);
      if (user) {
        this.userDocs = this.afs.doc<UserProfile>(`profile/${user.uid}`);
        this.userProfile = this.userDocs.valueChanges().pipe(shareReplay(1));
      }
    })).pipe().subscribe();
  }

  getProfile() {
    console.log('getProfile');
    return this.userProfile.pipe(map(profile => { return profile || false; }), tap(profile => {
      console.log('profile calling', profile);
    }));
  }

  createProfile(profile: UserProfile) {
    this.userDocs = this.afs.doc<UserProfile>(`profile/${profile.uid}`);
    const res = this.userDocs.set(profile);
    return res;
  }
}
