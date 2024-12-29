import RoomRepository from "../repositories/RoomRepository.js";

class RoomHandling {
  constructor() {
    this.roomRepository = new RoomRepository();
  }

  async getAllRooms() {
    try {
      const rooms = await this.roomRepository.getAllRooms();

      return rooms;
    } catch (error) {
      console.log(error);
    }
  }

  async createRoom(room) {
    try {
      const newRoom = await this.roomRepository.createRoom(room);

      return newRoom;
    } catch (error) {
      console.log(error);
    }
  }

  async getRoomById(id) {
    try {
      const room = await this.roomRepository.getRoomById(id);

      return room;
    } catch (error) {
      console.log(error);
    }
  }

  async updateRoomStatus(id, status) {
    try {
      const room = await this.roomRepository.updateRoomStatus(id, status);

      return room;
    } catch (error) {
      console.log(error);
    }
  }
}

export default RoomHandling;
