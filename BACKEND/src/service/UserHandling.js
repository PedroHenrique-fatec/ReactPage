import UserRepository from "../repositories/UserRepository.js";

class UserHandling {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAllUsers() {
    try {
      const users = await this.userRepository.getAllUsers();

      return users;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserById(id) {
    try {
      const id_user = await this.userRepository.getUserById(id);

      return id_user;
      
    } catch (error) {
      console.log(error);
    }
  }

  async createUser(user) {
    try {
      const createdUser = await this.userRepository.createUser(user);

      return createdUser;
    } catch (error) {
      console.log(error);
    }
  }

  async updateLoginStatus(id, status) {
    try {
      const updatedStatus = await this.userRepository.updateLoginStatus(
        id,
        status
      );

      return updatedStatus;
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserHandling;
