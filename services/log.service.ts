"use strict";
import { ServiceSchema, Context } from "moleculer";
import DbService from "moleculer-db";
import SqlAdapter from "moleculer-db-adapter-sequelize";
import Sequelize from "sequelize";

const hede = new SqlAdapter("postgres://postgres:@localhost:5432/postgres");
const LogService: ServiceSchema = {
	name: "log",
	mixins: DbService,
	adapter: hede,
	model: {
		name: "post",
		define: {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			name: Sequelize.STRING,
			data: Sequelize.JSON,
			password: Sequelize.STRING,
		},
	},
	/* 	settings:{
			populates:{
	
			}
		} */
	actions: {
		insert(ctx) {
			console.log("log.service", ctx.params)
			ctx.call("log.create", { name: ctx.params.name, password: ctx.params.password, data: ctx.params.data })
			return "Hello from WelcomeService";
		},
		async getLastItem(ctx) {
			return await ctx.call("log.find").then((items) => items[items.length - 1]);
		},
		async getNecati(ctx) {
			return await ctx.call("log.find", { query: { name: 'necatı' }, limit: 1 });
		},
		async removeNecati() {
			console.log("asda", this.adapter.service.model.destroy({
				where: {
					name: 'necatı'
				}
			}));
		},
		async updateDb() {
			this.adapter.service.model.update({ name: "yazılım" }, { where: { name: 'pankod' } } );
		},
	},
};

export = LogService;
