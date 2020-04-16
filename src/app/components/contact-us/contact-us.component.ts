import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.minLength(7), Validators.maxLength(15)]],
      mail: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(100)]]
    });
  }

  submit() {
    console.log(this.contactForm);
  }

  get nameInvalid() {
    return this.contactForm.get('name').invalid && this.contactForm.get('name').touched;
  }

  get phoneInvalid() {
    return this.contactForm.get('phone').invalid && this.contactForm.get('phone').touched;
  }

  get nmessageInvalid() {
    return this.contactForm.get('nmessage').invalid && this.contactForm.get('nmessage').touched;
  }

  get mailInvalid() {
    return this.contactForm.get('mail').invalid && this.contactForm.get('mail').touched;
  }
}
