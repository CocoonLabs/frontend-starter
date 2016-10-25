import '../font-awesome/scss/font-awesome.scss';

import React from "react";

export default class WizardSteps extends React.Component {
	render() {
		const wizard = this.props;
		
		const wizard_steps = wizard.wizard_steps;
		const steps_width = wizard.steps_width;

		const wizardStepsComponent = wizard_steps.map((step, i) => {
			const isActiveClass = step.isActive ? " active" : "";
			const isDoneClass = step.isDone ? " activated" : "";
			return (
				<div class={"wizard-step" + isActiveClass + isDoneClass} key={"step" + i} style={{width: steps_width + "%"}}>
					<div class="wizard-step-icon">
						<i class={step.class}></i>
					</div>
					<p>{step.title}</p>
				</div>	
			)
		});

		return(
			<div>
				{ wizardStepsComponent }
			</div>
		)
	}
}