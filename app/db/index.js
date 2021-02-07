const Knex = require('knex');
const {Model} = require('objection');

const knexConfig = require('./knexfile');
const env = process.env.NODE_ENV || 'development';

const knex = Knex(knexConfig[env]);

Model.knex(knex);
