const { DB_PATH } = require("../../config");
const fs = require('fs');
let db = require(DB_PATH);



class UsersServices {

  async createUser(user) {
    // Make your magic here!

    try {
      const id = db.length;
      user.id = id + 1;
      db.push(user);
      fs.writeFileSync(DB_PATH, JSON.stringify(db));
      const userCreated = db[db.length - 1];
      return userCreated;

    } catch (error) {
      throw error;
    }
  }

  async getUsers() {
    try {
      return await db;
    } catch (error) {
      throw error;
    }
  }

}


module.exports = new UsersServices();