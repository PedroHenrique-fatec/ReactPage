import Room from "../models/Room.js";
import RoomHandling from "../service/RoomHandling.js";

const roomHandling = new RoomHandling();

const createRoom = async (req, res) => {
  try {
    const { name_room, capacity_room, resources_room, time_open } = req.body;

    console.log(req.body)

    const newRoom = {
      name_room: name_room,
      capacity_room: capacity_room,
      resources_room: resources_room,
      time_open: time_open
    };

    await roomHandling.createRoom(newRoom);

    const message = 'Room created successfully'

    return res.json(message);
  } catch (error) {
    console.error(error);
    return res.json({message: "Error creating room"})
  }
}

const getRooms = async (req, res) => {
  try {
    const rooms = await roomHandling.getAllRooms();

    res.json(rooms);
  } catch (error) {
    console.error(error);
  }
};

export default { getRooms, createRoom };
