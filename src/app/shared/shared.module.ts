import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailsDialogComponent } from './components/details-dialog/details-dialog.component';
import { MasksPipe } from './pipes/masks.pipe';



@NgModule({
  declarations: [
    DetailsDialogComponent,
    MasksPipe
  ],
  imports: [// Outros módulos que SEU_PIPE ou SEU_COMPONENTE usam (ex: FormsModule, ReactiveFormsModule, Material Modules)
    CommonModule
  ],
  exports: [
    DetailsDialogComponent,
    MasksPipe
  ]
})
export class SharedModule { }
