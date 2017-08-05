var mongoose = require('mongoose');
//var connString = 'mongodb://localhost:27017/mediamixmodeling';
var connString = 'mongodb://rakesh:rkt123@ds131583.mlab.com:31583/rakeshthakur';
module.exports = MMMDash.db = {
    connectionString: connString,
    connectionObj: mongoose.createConnection(connString),
    isUserDataCollectionExist: function (collectionName) {
        MMMDash.db.connectionObj.db.listCollections(function (err, names) {
          var existsFlag = false;
            for (i=0; i < names.length;i++)
            {
              console.log(names[i].name);
              if (collectionName.localeCompare(names[i].name) == 0)
              {
                existsFlag = true;
                break;
              }
            }
            return existsFlag;
        });
    }
}
