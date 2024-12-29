import connection from "../config/database.js";

class ReservationRepository {
    async getAllReservations() {
        const query = `SELECT * FROM reservations`;
    
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

    async createReservation(reservation) {
        const {id_user, id_room, time_start, time_close} = reservation;

        const query = "INSERT INTO reservations (user_id, room_id, start_time, end_time) VALUES (?, ?, ?, ?);"

        return new Promise((resolve, reject) => {
            connection.query(query, [id_user, id_room, time_start, time_close], (err, results) => {
                if (err) {
                    console.error(err)
                    reject(err);
                    return
                }

                resolve(results)
            })
        })
    }
}

export default ReservationRepository;