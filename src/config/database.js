module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'gonodemodulo2',
  operatorAliases: false,
  define: {
    timestamps: true, // automatically add created_at and updated_at in each created table
    underscored: true, // change camelcase to snakecase to field names
    underscoredAll: true // apply the same to table names
  }
}
