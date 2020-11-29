import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  ContactService
} from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.buildForm();
  }

  ngOnInit(): void {}

  buildForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.minLength(7), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.contactService.sendContact(formData).subscribe(
        resp => {
          console.log(JSON.stringify(resp));
          Swal.fire({
            title: `Gracias por contactarnos, ${formData.name.split(' ')[0]}`,
            text: `Tu mensaje ha sido enviado`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            customClass: {
              confirmButton: 'confirm-button'
            }
          });
        },
        error => {
          console.log(JSON.stringify(error));
          Swal.fire({
            title: `Lo sentimos`,
            text: `Hubo un error al enviar tu mensaje, intenta nuevemente más tarde`,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
      );
    }
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
