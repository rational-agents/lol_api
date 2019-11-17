const Sequelize = require('sequelize');

const { DB } = process.env;
const { DB_USER } = process.env;
const { DB_PASSWORD } = process.env;
const { DB_HOST } = process.env;
const { DB_DIALECT } = process.env;

const database = new Sequelize( DB,DB_USER,DB_PASSWORD,{
     host: DB_HOST,
     dialect: DB_DIALECT,
    operatorsAliases: Sequelize.Op
  });

const Clubs = database.define('clubs',{
     id:{type: Sequelize.INTEGER,primaryKey: true,autoIncrement: true}, //serial PRIMARY KEY,
     venue:{type:Sequelize.STRING, allowNull:false}, //varchar NOT NULL,
     address:{type:Sequelize.STRING}, //varchar,
     owner:{type:Sequelize.STRING}, //varchar,
     website:{type:Sequelize.STRING}, //varchar,
     document:{type: Sequelize.JSONB, allowNull: true}
});

const Comedians = database.define('comedians',{
     id:{type: Sequelize.INTEGER,primaryKey: true,autoIncrement: true}, // serial PRIMARY KEY,
     first_name:{type:Sequelize.STRING, allowNull:false}, // varchar NOT NULL,
     last_name:{type:Sequelize.STRING, allowNull:false}, // varchar,
     stage_name:{type:Sequelize.STRING}, // varchar,
     location:{type:Sequelize.STRING}, // varchar,
     age:{type:Sequelize.STRING}, // varchar,
     document:{type: Sequelize.JSONB, allowNull: true}
});

const Shows = database.define('shows',{
     id:{type: Sequelize.INTEGER,primaryKey: true,autoIncrement: true}, //serial PRIMARY KEY,
     venue:{type:Sequelize.STRING, allowNull:false}, //varchar NOT NULL,
     headline:{type:Sequelize.STRING, allowNull:false}, //varchar NOT NULL,
     show_date:{type:Sequelize.DATEONLY}, //date NOT NULL,
     show_time:{type:Sequelize.TIME}, //time NOT NULL
     document:{type:Sequelize.JSONB, allowNull: true}
});

module.exports = {
  Clubs,
  Comedians,
  Shows,
  database
}