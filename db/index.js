const firebase = require('firebase');

class db {
      constructor(config) {
            this.config = config;
            this.connect();
      }

      connect() {
            let app = firebase.initializeApp(this.config);
            return app.firestore();
      }

      readData(data) {
            firebase.database()
                  .ref('urls/')
      }
}

module.exports = db;