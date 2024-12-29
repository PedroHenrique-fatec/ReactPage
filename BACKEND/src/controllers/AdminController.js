import UserHandling from "../service/UserHandling.js";
import ReservationHandling from "../service/ReservationHandling.js";
import RoomHandling from "../service/RoomHandling.js";

const userHandling = new UserHandling();
const roomHandling = new RoomHandling();
const reservationHandling = new ReservationHandling();

const getAll = async (req, res) => {
  console.log('Fetching all data...');

  try {
    const [users, rooms, reservations] = await Promise.all([
      userHandling.getAllUsers(),
      roomHandling.getAllRooms(),
      reservationHandling.getAllReservations()
    ]);

    console.log({users, rooms, reservations});

    res.json({ users, rooms, reservations });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export default { getAll };
