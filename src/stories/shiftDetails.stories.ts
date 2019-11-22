import { ShiftDetailsComponent } from './../app/shift-details/shift-details.component';
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';


storiesOf("Shift Details", module)
  .addDecorator(
    moduleMetadata({
      declarations: [ShiftDetailsComponent],
      imports: [
        ReactiveFormsModule,        
        NgxMaterialTimepickerModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule
      ],
      entryComponents: [
        ShiftDetailsComponent
     ],
      providers: [FormBuilder]
    })
  )
  .add("Shift", () => ({
      component: ShiftDetailsComponent,
      props:{

      }
  }))
