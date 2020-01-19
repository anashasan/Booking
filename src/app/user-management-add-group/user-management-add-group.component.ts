import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import {AddGroup} from './add-group';
import { UsermanagementGroupService } from 'src/Services/usermanagement-group.service';




@Component({
  selector: 'app-user-management-add-group',
  templateUrl: './user-management-add-group.component.html',
  styleUrls: ['./user-management-add-group.component.scss']
})
export class UserManagementAddGroupComponent implements OnInit {

addgroup:AddGroup = new AddGroup();


  constructor(private fb: FormBuilder,private group:UsermanagementGroupService) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
      comment: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  validateForm: FormGroup;

  submitForm(value: any): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        // if (control.value === 'JasonWood') {
        //   // you have to return `{error: true}` to mark it as an error event
        //   observer.next({ error: true, duplicated: true });
        // } else {
          observer.next(null);
        // }
        observer.complete();
      }, 1000);
    });

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  
  post() {
    this.group.postData(this.addgroup).subscribe(response => {
     console.log(response);
    }) 

  }



}
