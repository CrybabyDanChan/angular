import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class MyValidators {
  static restrictedEmails(control: FormControl): {[key: string]: boolean} {
    const restrictedEmails = ['v@mail.r'];

    if (restrictedEmails.includes(control.value)) {
      return { restrictedEmail: true };
    }

    return null;
  }

  static usingEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => setTimeout(() => {
      if (control.value === 'dany@mail.ru') {
        resolve({ unique: true });
      }
      resolve(null);
    }, 5000));
  }
}
