import { Component, Input } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup } from '@angular/forms';
import { Consent } from './Consent';

@Component({
  selector: 'person-edit',
  template: `
    <h1>Verify Consent:</h1>
    <br/>
    <form [formGroup]="ConsentForm">
      <div>
        <span>Owner: <input formControlName="OwnerName"></span>
      </div>
      <div>
        <span>OwnerId: <input formControlName="OwnerId"></span>
      </div>
      <div>
        <span>ConsentDescription: <input formControlName="description"></span>
      </div>
      <div>
        <span>FilePath: <input formControlName="filepath"></span>
      </div>
    </form>
    <button (click)="saveForm()">Verify</button>
    <button (click)="resetForm()">Reset</button>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class PersonEditComponent {
  public consentForm: FormGroup;
  public consent: Consent = {
    Owner: '',
    OwnerId: '',
    ConsentDescription: '',
    FilePath: '',
  };

  constructor(private fb: FormBuilder) {
    // Create FormGroup
    this.consentForm = this.fb.group({
      Owner: '',
      OwnerId: '',
      ConsentDescription: '',
      FilePath: '',
    });

    // Set Values
    this.consentForm.controls['Owner'].setValue(this.consent.Owner);
    this.consentForm.controls['OwnerId'].setValue(this.consent.OwnerId);
    this.consentForm.controls['ConsentDescription'].setValue(
      this.consent.ConsentDescription
    );
    this.consentForm.controls['FilePath'].setValue(this.consent.FilePath);
  }

  resetForm() {
    this.consentForm.controls['Owner'].setValue(this.consent.Owner);
    this.consentForm.controls['OwnerId'].setValue(this.consent.OwnerId);
    this.consentForm.controls['ConsentDescription'].setValue(
      this.consent.ConsentDescription
    );
    this.consentForm.controls['FilePath'].setValue(this.consent.FilePath);
  }

  saveForm() {
    this.consent = this.consentForm.value;
  }
}
