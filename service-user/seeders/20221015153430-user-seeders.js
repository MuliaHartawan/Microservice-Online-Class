'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('users', [
      {
        name: 'Mulia Hartawan N',
        profession: 'Backend Developer',
        role : 'admin',
        email : 'mulia@gmail.com',
        password : await bcrypt.hash('mulia', 10),
        created_at : new Date(),
        updated_at : new Date(),
      },
      {
        name: 'Deo Lorensa',
        profession: 'FrontendDeveloper',
        role : 'student',
        email : 'deo@gmail.com',
        password : await bcrypt.hash('deo', 10),
        created_at : new Date(),
        updated_at : new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', null, {});
  }
};
