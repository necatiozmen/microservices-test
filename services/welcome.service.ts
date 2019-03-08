"use strict";
import { ServiceSchema } from "moleculer";

const WelcomeService: ServiceSchema = {
	name: "welcome",

	settings: {

	},


	dependencies: [],

	actions: {

		hello() {
			return "Hello from WelcomeService";
		},

		welcome: {
			params: {
				name: "string",
			},
			handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			},
		},
	},


	events: {
		"test": () => {

			console.log("test fired")
		}
	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	// started() {

	// },

	/**
	 * Service stopped lifecycle event handler
	 */
	// stopped() {

	// },
};

export = WelcomeService;
