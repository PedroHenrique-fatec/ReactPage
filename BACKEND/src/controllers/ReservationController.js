import Reservation from "../models/Reservation.js";
import ReservationHandling from "../service/ReservationHandling.js";
import RoomHandling from "../service/RoomHandling.js";

const reservationHandling = new ReservationHandling();
const roomHandling = new RoomHandling();

const createReservation = async (req, res) => {
  try {
    const { id_room, id_user, time_start, time_close } = req.body;

    console.log(req.body)

    const actualDate = new Date();

    const room = await roomHandling.getRoomById(id_room);

    if (
      id_room == "" ||
      id_room == null ||
      id_room == undefined ||
      id_user == "" ||
      id_user == null ||
      id_user == undefined ||
      time_start == "" ||
      time_start == null ||
      time_start == undefined ||
      time_close == "" ||
      time_close == null ||
      time_close == undefined
    ) {
      return res.json({ message: "Missing required fields" });
    }

    if (!room) {
      return res.json({ message: "Room not found" });
    }

    if (room.is_open == 0) {
      return res.json({ message: "Room is reserved" });
    }

    if (
      time_start < actualDate ||
      time_close < actualDate ||
      time_start > time_close
    ) {
      return res.json({ message: "Invalid time" });
    }

    const updateResult = await roomHandling.updateRoomStatus(
      room.id_room,
      false
    );

    if (updateResult.affectedRows > 0) {
      const newReservation = new Reservation(
        id_user,
        id_room,
        time_start,
        time_close
      );

      const result = await reservationHandling.createReservation(
        newReservation
      );

      return res.json({
        message: "Room reserved successfully",
        result: result,
      });
    } else {
      return res.json({ message: "Failed to reserve room" });
    }
  } catch (error) {
    console.error(error);
  }
};

export default { createReservation };
