import connection from "../config/database.js";

class RoomRepository {
  async getAllRooms() {
    const query = `SELECT * FROM rooms`;

    return new Promise((resolve, reject) => {
      connection.query(query, (err, results) => {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }

        resolve(results);
      });
    });
  }

  async createRoom(room) {
    const { name_room, capacity_room, resources_room, time_open } = room;

    const query = `INSERT INTO rooms (name_room, capacity_room, resources_room, time_open, is_open) VALUES (?, ?, ?, ?, ?)`;

    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [name_room, capacity_room, resources_room, time_open, true],
        (err, results) => {
          if (err) {
            console.error(err);
            reject(err);
            return;
          }

          resolve(results);
        }
      );
    });
  }

  async getRoomById(id) {
    const query = `SELECT * FROM rooms where id_room = ?`;

    return new Promise((resolve, reject) => {
      connection.query(query, [id], (err, results) => {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }

        resolve(results[0]);
      });
    });
  }

  async updateRoomStatus(id, status) {
    const query = "UPDATE rooms SET is_open = ? WHERE id_room = ?";

    return new Promise((resolve, reject) => {
      connection.query(query, [status, id], (err, results) => {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }

        resolve(results);
      });
    });
  }
}

export default RoomRepository;
