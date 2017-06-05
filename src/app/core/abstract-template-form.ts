import { Component, Input, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertService } from '../services/alert.service';

export abstract class AbstractTemplateForm {
	form: NgForm;
	formErrors: any = {};
	validationMessages: any = {};
	@Input() model: any = {};
	@Input() parent: any = {};
	@Input() submitLabel: string = 'Abschicken';
	@ViewChild('form') currentForm: NgForm;

	constructor(
		protected alertService: AlertService,
	) { };
	
	ngAfterViewChecked() {
  	this.formChanged();
	};

	private formChanged() {
		if (this.currentForm === this.form) { return; }
		this.form = this.currentForm;
		if (this.form) {
			this.form.valueChanges
				.subscribe(data => this.onValueChanged(data));
		}
	};

	private onValueChanged(data?: any) {
		if (!this.form) { return; }
		const form = this.form.form;

		for (const field in this.formErrors) {
			// clear previous error message (if any)
			this.formErrors[field] = '';
			const control = form.get(field);

			if (control && control.dirty && !control.valid) {
				const messages = this.validationMessages[field];
				for (const key in control.errors) {
					this.formErrors[field] += messages[key] + ' ';
				}
			}
		}
	};

	/**
	 * https://github.com/angular/angular/blob/4.1.x/packages/forms/src/model.ts
	 *
	 */
	setError(field: string, messageCode: string) {
		if (field == 'global') {
			this.alertService.error(messageCode);
		} else {
			let error: any = {};
			error[messageCode] = true;
			this.form.form.get(field).setErrors(error)
			this.onValueChanged();
		}
		return true;
	};
}
