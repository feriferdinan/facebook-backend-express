'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comment_responses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment_id: {
        type: Sequelize.INTEGER,
        reference:{
          model:'feed_comment',
          key:'id'
        }
      },
      response_id: {
        type: Sequelize.INTEGER,
        reference:{
          model:'responses',
          key:'id'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        reference:{
          model:'users',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comment_responses');
  }
};