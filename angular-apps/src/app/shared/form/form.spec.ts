import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Form } from './form';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Form Component', () => {
  let component: Form;
  let fixture: ComponentFixture<Form>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Form);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form component', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalid form when empty', () => {
    expect(component.userForm.valid).toBeFalsy();
  });

  it('should emit form value and reset on submit', () => {
    // Spy on the EventEmitter
    const spy = spyOn(component.formEmitter, 'emit');

    // Fill valid data
    const validData = {
      name: 'Willman',
      age: 25,
      price: 20000,
      job: 'Developer',
      dp: 3000,
      date: new Date().toISOString().split('T')[0] // Format YYYY-MM-DD
    };

    component.userForm.setValue(validData);
    expect(component.userForm.valid).toBeTrue();

    component.submit();

    expect(spy).toHaveBeenCalledOnceWith(validData);
    expect(component.userForm.pristine).toBeTrue();
    expect(component.userForm.value).toEqual({
      name: null,
      age: null,
      price: null,
      job: null,
      dp: null,
      date: null
    });
  });

  it('should fail minDateValidator if date is in the past', () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);
    component.userForm.controls['date'].setValue(pastDate.toISOString().split('T')[0]);

    expect(component.userForm.controls['date'].errors).toEqual({ minDate: true });
  });

  it('should pass minDateValidator if date is today or future', () => {
    const today = new Date().toISOString().split('T')[0];
    component.userForm.controls['date'].setValue(today);

    expect(component.userForm.controls['date'].errors).toBeNull();
  });
});
