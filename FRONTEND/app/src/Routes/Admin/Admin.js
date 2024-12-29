import React, { useState } from "react";

import FillTableUser from "./FillTableUser";
import FillTableRoom from "./FillTableRoom";
import FillTableReservation from "./FillTableReservation";

import CreateRoom from "./CreateRoom";

import '../../styles/Admin/admin.css'

function Admin({ users, rooms, reservations }) {
  const [nameRoom, setNameRoom] = useState("");
  const [capacityRoom, setCapacityRoom] = useState("");
  const [resourcesRoom, setResourcesRoom] = useState("");
  const [timeOpen, setTimeOpen] = useState("");

  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const handleCreateRoom = async (e) => {
    e.preventDefault();

    const room = {
      name_room: nameRoom,
      capacity_room: capacityRoom,
      resources_room: resourcesRoom,
      time_open: timeOpen,
    };

    await CreateRoom(room);
    setIsModal(false);
  };

  return (
    <>
      <div>
        <button onClick={openModal}>Register Room</button>
      </div>

      {/* Tabela de Usuários */}
      <div className="table_user">
        <div className="title_table">Table Users</div>
        <table>
          <thead>
            <tr>
              <th>Id's user</th>
              <th>Name's user</th>
              <th>Email's user</th>
              <th>Password's user</th>
              <th>Status's user</th>
              <th>Actions</th>
            </tr>
          </thead>
          {users && <FillTableUser users={users} />}
        </table>
      </div>

      {/* Tabela de Salas */}
      <div className="table_room">
        <div className="title_table">Table Rooms</div>
        <table>
          <thead>
            <tr>
              <th>Id's room</th>
              <th>Name's room</th>
              <th>Capacity's room</th>
              <th>Resources's room</th>
              <th>Date's room</th>
              <th>Status's room</th>
              <th>Actions</th>
            </tr>
          </thead>
          {rooms && <FillTableRoom rooms={rooms} />}
        </table>
      </div>

      {/* Tabela de Reservas */}
      <div className="table_reservation">
        <div className="title_table">Table Reservations</div>
        <table>
          <thead>
            <tr>
              <th>Id's reservation</th>
              <th>Email's user</th>
              <th>Name's room</th>
              <th>Date open reservation</th>
              <th>Date close reservation</th>
            </tr>
          </thead>
          {reservations && <FillTableReservation reservations={reservations} />}
        </table>
      </div>

      {/* Modal de Criação de Sala */}
      {isModal && (
        <div id="modal_room">
          <form id="form_room" onSubmit={handleCreateRoom}>
            <div className="title_modal">
              <h2>Register room</h2>
            </div>

            <div className="input_group">
              <label htmlFor="room_name">Room name: </label>
              <input
                type="text"
                id="room_name"
                name="room_name"
                value={nameRoom}
                onChange={(e) => setNameRoom(e.target.value)}
              />
            </div>

            <div className="input_group">
              <label htmlFor="room_capacity">Capacity: </label>
              <input
                type="number"
                id="room_capacity"
                name="room_capacity"
                value={capacityRoom}
                onChange={(e) => setCapacityRoom(e.target.value)}
              />
            </div>

            <div className="input_group">
              <label htmlFor="room_resources">Resources: </label>
              <textarea
                name="room_resources"
                id="room_resources"
                value={resourcesRoom}
                onChange={(e) => setResourcesRoom(e.target.value)}
              />
            </div>

            <div className="input_group">
              <label htmlFor="time_start">Time start: </label>
              <input
                type="datetime-local"
                name="time_start"
                id="time_start"
                value={timeOpen}
                onChange={(e) => setTimeOpen(e.target.value)}
              />
            </div>

            <div className="input_group">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Admin;
