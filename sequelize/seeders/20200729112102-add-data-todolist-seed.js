'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Todolists", [{
      description: "Jogging jam 5:00 WIB",
      status: "(DONE)",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: "Makan di Warteg Bu Ita",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: "Pergi ambil kue di Cizz Cake",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Todolist", null, {})
  }
};
