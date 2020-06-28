import { Injectable } from '@angular/core';
import M from 'materialize-css';


@Injectable({
  providedIn: 'root'
})
export class AlertToastService {

  constructor() { }

  showAlertSuccess(message: string) {
    M.toast({html: message, classes:'green'});
  }

  showAlertDanger(message: string) {
    M.toast({html: message, classes:'red'});
  }

  showAlertWarning(message: string) {
    M.toast({html: message, classes:'yellow'});
  }
}
