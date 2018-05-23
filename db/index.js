const firebase = require('firebase');

class db {
      constructor(config) {
            this.config = config;
            this.connect();
      }

      connect() {
            return firebase.initializeApp(this.config);
      }
}

module.exports = db;