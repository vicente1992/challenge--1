// Import some module for read and write files...
const { UsersService } = require("../services");


// Import your DB Path and asign it to a variable

class UsersController {
  async createUser(req, res) {
    // Make your magic here!
    const { name, birthDate, temperature, email, garmentColor } = req.body;

    if (!name || !birthDate || !temperature) {
      res.status(400).json({
        message: 'Por favor complete la información'
      });
    }

    if (temperature < 36.5 || temperature > 37.5) {
      res.status(400).json({
        message: `El usuario no puede Ingresa porque su temperatura es de: ${temperature}`
      });
    }
    let user = {
      name,
      birthDate,
      temperature,
      email,
      garmentColor
    }

    try {
      const userCreated = await UsersService.createUser(user);
      res.status(201).json(userCreated);
    } catch (error) {
      res.status(400).json(error);
    }

  }

  async getUsers(req, res) {
    // And here!
    try {
      const users = await UsersService.getUsers();
      if (users.length === 0) {
        res.status(200).json({
          message: 'No hay usuarios posteando aún'
        });
      } else {
        res.status(200).json(users);
      }

    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = new UsersController();
