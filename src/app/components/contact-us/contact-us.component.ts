import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import {
  ContactService
} from 'src/app/services/contact.service';
import Swal from 'sweetalert2';
import { OnExecuteData, ReCaptchaV3Service } from 'ng-recaptcha';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  contactForm: FormGroup;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private contactService: ContactService, private recaptchaV3Service: ReCaptchaV3Service) {
    this.buildForm();
  }

  public ngOnInit() {
    this.subscription = this.recaptchaV3Service.onExecute
      .subscribe((data: OnExecuteData) => {
        console.log('Data: ', data);
      });
  }

  public ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  buildForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.minLength(7), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      recaptcha: ['']
    });
  }

  submit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.isLoading = true;

      const sendContactObserver = {
        next: (resp) => {
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
        error: error => {
          console.log(JSON.stringify(error));
          Swal.fire({
            title: `Lo sentimos`,
            text: `Hubo un error al enviar tu mensaje, intenta nuevemente más tarde`,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        },
        complete: () => {
          this.isLoading = false
        },
      };

      this.contactService.sendContact(formData).subscribe(sendContactObserver);
    }
  }

  validateForm() {
    const captchaObserver = {
      next: (token) => {
        this.contactForm.patchValue({
          recaptcha: token
        });

        this.submit();
      },
    }

    this.recaptchaV3Service.execute('submit')
      .subscribe(captchaObserver);
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
