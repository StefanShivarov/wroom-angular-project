import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddOfferDto } from 'src/app/core/interfaces/addOfferDto';
import { SignInUserDto } from 'src/app/core/interfaces/SignInUserDto';
import { OfferService } from 'src/app/core/service/offer.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private offerService: OfferService) { }

  addOfferFormGroup: FormGroup = this.formBuilder.group({
    'title': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'description': new FormControl(null),
    'price': new FormControl(null, [Validators.required, Validators.min(15)]),
    'imageUrl': new FormControl(null, [Validators.required])
  })

  ngOnInit(): void {
  }

  shouldShowErrorForControl(controlName: string, sourceGroup: FormGroup = this.addOfferFormGroup){
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid;
  }

  handleAddOffer(): void{
    const offerToAdd: AddOfferDto = this.addOfferFormGroup.value;
    console.log(offerToAdd);
    this.offerService.addOffer$(offerToAdd).subscribe({
      next: (offer) => {
        this.router.navigate(['/offers', offer.id])
      },
      error: (error) => {
        console.error(error);
      }
    }
    );
    this.addOfferFormGroup.reset();
  }
}
