import { NgModule } from '@angular/core';
//import { MatSidenavModule, MatToolbarModule, MatSliderModule, MatSlideToggleModule, MatIconModule, MatListModule } from '@angular/material';
import {
  // MatAutocompleteModule,
  // MatBadgeModule,
  // MatBottomSheetModule,
  // MatButtonModule,
  // MatButtonToggleModule,
  // MatCardModule,
  // MatCheckboxModule,
  // MatChipsModule,
  // MatDatepickerModule,
  // MatDialogModule,
  // MatDividerModule,
  // MatExpansionModule,
  // MatGridListModule,
   MatIconModule,
   MatInputModule,
   MatListModule,
  // MatMenuModule,
  // MatNativeDateModule,
  // MatPaginatorModule,
  // MatProgressBarModule,
  // MatProgressSpinnerModule,
  // MatRadioModule,
   MatRippleModule,
   MatSelectModule,
   MatSidenavModule,
   MatSliderModule,
   MatSlideToggleModule,
  // MatSnackBarModule,
  // MatSortModule,
  // MatStepperModule,
  // MatTableModule,
  // MatTabsModule,
   MatToolbarModule,
  // MatTooltipModule,
  // MatTreeModule
} from '@angular/material';

@NgModule({
  imports: [MatSidenavModule, MatToolbarModule, MatSliderModule, MatSlideToggleModule, MatIconModule, MatListModule, MatSelectModule, MatInputModule],
  exports: [MatSidenavModule, MatToolbarModule, MatSliderModule, MatSlideToggleModule, MatIconModule, MatListModule, MatSelectModule, MatInputModule],
})
export class     AppNgMaterialModule { }