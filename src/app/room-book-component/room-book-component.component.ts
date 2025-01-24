import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-book-component',
  standalone: false,
  templateUrl: './room-book-component.component.html',
  styleUrls: ['./room-book-component.component.css'],
})
export class RoomBookComponentComponent {
  userForm: FormGroup;
  selectedEquipment: { [key: string]: boolean } = {
    'Projecteur': false,
    'Tableau Blanc': false,
    'Connexion Internet': false,
    'Microphone': false,
  };

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      salle: ['', [Validators.required]],
      dateReservation: ['', [Validators.required, this.futureDateValidator]],
      heurDebut: ['', [Validators.required]],
      duree: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      participant: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$'), Validators.max(50)],
      ],
    });
  }

  toggleEquipment(equipment: string, isChecked: boolean): void {
    this.selectedEquipment[equipment] = isChecked;
  }

  getSelectedEquipments(): string[] {
    return Object.keys(this.selectedEquipment).filter(
      (equip) => this.selectedEquipment[equip]
    );
  }

  futureDateValidator(control: any): { [key: string]: boolean } | null {
    const value = control.value;
    const currentDate = new Date();
    const selectedDate = new Date(value);
    
    currentDate.setHours(0, 0, 0, 0);

    if (!value || isNaN(selectedDate.getTime())) {
      return { invalidDate: true }; 
    }
    return selectedDate > currentDate ? null : { notFutureDate: true };
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted:', this.userForm.value);
      console.log('Selected Equipment:', this.selectedEquipment);
    } else {
      console.log('Form Invalid:', this.userForm.errors);
    }
  }
}
