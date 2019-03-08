"use strict";
import { ServiceSchema } from "moleculer";

const GreeterService: ServiceSchema = {
	name: "greeter",

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		hello() {
			return "Hello Moleculer";
		},

		welcome: {
			params: {
				name: "string",
			},
			async handler(ctx) {
				ctx.broadcast("test", {});
				return `Welcome, ${await ctx.call("welcome.hello")}`;
			},
		},

		writeDb: {
			params: {
				name: "string",
				password: "string",
			},

			async handler(ctx) {
				console.log("greeter service", ctx.params);
				const params = {
					...ctx.params,
					data: {
						"test": "1",
						"test2": "2"
					}
				}
				await ctx.call("log.insert", params);

				return "saved to db";
			}
		},

		lastItem: {
			async handler(ctx) {
				return await ctx.call("log.getLastItem");
			},
		},

		lastNecati: {
			async handler(ctx) {
				return await ctx.call("log.getNecati");
			},
		},
		removeNecati: {
			async handler(ctx) {
				 await ctx.call("log.removeNecati");
			},
		},
		updateDb: {
			async handler(ctx) {
				return await ctx.call("log.updateDb");
			},
		},
	},

	/**
	 * Events
	 */
	events: {

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

export = GreeterService;
