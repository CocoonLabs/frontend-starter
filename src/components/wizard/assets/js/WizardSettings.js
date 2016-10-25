import { EventEmitter } from "events";

class WizardSettings extends EventEmitter {
	constructor(){
		super();
		this.steps = [
			{
				"title": "insurance",
				"isActive": true,
				"isDone": false,
				"class": "fa fa-user"
			},
			{
				"title": "info",
				"isActive": false,
				"isDone": false,
				"class": "fa fa-key"
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
		];
	}

	getAll() {
		return this.steps;
	}
}

const wizardSettings = new WizardSettings;
export default wizardSettings;