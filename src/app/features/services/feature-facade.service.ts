import { CoreFacadeService } from '../../core/services/core-facade.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureFacadeService {

  constructor(private coreFacade: CoreFacadeService) { }

  logoutUser() {
    this.coreFacade.logoutUser();
  }
}
