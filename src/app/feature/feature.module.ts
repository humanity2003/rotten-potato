import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Import HttpClientModule if needed for HTTP requests
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'; // Import NgbRatingModule if you need to use ratings



@NgModule({
  declarations: [
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbRatingModule
  ],
  exports: [
    StarRatingComponent
  ]
})
export class FeatureModule { }
