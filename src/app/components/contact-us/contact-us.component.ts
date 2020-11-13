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
      name: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.minLength(7), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(50)]]
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

  get messageInvalid() {
    return this.contactForm.get('message').invalid && this.contactForm.get('message').touched;
  }

  get emailInvalid() {
    return this.contactForm.get('email').invalid && this.contactForm.get('email').touched;
  }
}
