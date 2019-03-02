'use strict'

module.exports = {
    
    
     HTTP_STATUS_CODES: {
         OK: 200,
         CREATED: 201,
         NO_CONTENT: 204,
         BAD_REQUEST: 400,
         UNAUTHORIZED: 401,
         NOT_FOUND: 404,
         INTERNAL_SERVER_ERROR: 500
     },
      // I am using the OR ("||") operator to check if the PORT environment variable exists. If not, I will default to 8080
     PORT:process.env.PORT || 8080,
     MONGO_DATABASE_URL:  process.env.DATABASE_URL || 'mongodb://localhost/execfollowup-db',
     TEST_MONGO_DATABASE_URL:  process.env.TEST_DATABASE_URL || 'mongodb://localhost/execfollowup-testdb',
     JWT_SECRET: process.env.JWT_SECRET || 'default',
     JWT_EXPIRY: process.env.JWT_EXPIRY || '7d'
};