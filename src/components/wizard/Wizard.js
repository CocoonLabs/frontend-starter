import './assets/css/style.scss';

import React from 'react';

import WizardSteps from './assets/js/WizardSteps';

export default class Wizard extends React.Component {
	constructor() {
		super();
		this.state = {
			steps_progressbar_width: 0,
			current_step: 0,
			wizard_steps: [
				{
					"title": "insurance",
					"isActive": true,
					"isDone": false,
					"class": "fa fa-user",
					"template": this.insurance()
				},
				{
					"title": "info",
					"isActive": false,
					"isDone": false,
					"class": "fa fa-key",
					"template": this.info()
				},
				{
					"title": "social",
					"isActive": false,
					"isDone": false,
					"class": "fa fa-twitter"
				},
				{
					"title": "requirements",
					"isActive": false,
					"isDone": false,
					"class": "fa fa-facebook"
				}
			],
		}
	}

	insurance() {
		return(
			<input name="input" />
		)
	}

	info() {
		return(
			<button name="input">Test</button>
		)
	}

	componentWillMount() {
		const wizard = this.state;

		// Get wizard step count
		const steps_count = wizard.wizard_steps.length;

		// Compute the initial width of the progressbar
		const steps_progressbar_width = (100 / steps_count) / 2;
		this.setState({steps_progressbar_width});
	}

	nextStep(e) {
		const wizard = this.state;

		// Get the active step
		const current_step = wizard.current_step;

		// Get all steps
		const wizard_steps = wizard.wizard_steps;

		// Count of steps
		const steps_count = wizard_steps.length;

		// Set progressbar width
		const steps_progressbar_width = wizard.steps_progressbar_width;

		wizard_steps[current_step].isActive = false;
		wizard_steps[current_step].isDone = true;

		wizard_steps[current_step + 1].isActive = true;
		wizard_steps[current_step + 1].isDone = false;

		this.setState({
			steps_progressbar_width: steps_progressbar_width + (100 / steps_count),
			current_step: current_step + 1
		});
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		const wizard = this.state;

		// Get all steps
		const wizard_steps = wizard.wizard_steps;

		// Get the current step
		const current_step = wizard.current_step;

		// Compute the width per step
		const steps_count = wizard_steps.length;
		const steps_width = 100 / steps_count;

		// Compute width of the progressbar
		const steps_progressbar_width = wizard.steps_progressbar_width;

		// Get the current page to be rendered
		let current_page;
		const page = wizard.wizard_steps.map((step, i) => {
			if(current_step == i){
				current_page = (
					<div>
						<h4>{step.title}</h4>
						{step.template}
						<div class="wizard-button">
							<button type="button" onClick={this.nextStep.bind(this)} class="btn btn-next">Next</button>
						</div>
					</div>
				)
			}
		});

		return(
			<div class="wizard-container">
				<form role="form" action="" method="post" onSubmit={this.handleSubmit.bind(this)} class="wizard-form">
					<h3>Register to our app</h3>
					<p>Fill in the form to get instant access</p>

					<div class="wizard-steps">
						<div class="wizard-progress">
							<div class="wizard-progress-line" style={{width: steps_progressbar_width + "%"}}></div>
						</div>
						<WizardSteps wizard_steps={wizard_steps} steps_width={steps_width} />
					</div>

					{ current_page }

				</form>
			</div>
		)
	}
}