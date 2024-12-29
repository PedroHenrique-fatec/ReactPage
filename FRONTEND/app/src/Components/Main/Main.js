import React, { useEffect, useState } from "react";

import RenderRoom from "../../Routes/Main/RenderRoom";
import ReservationRoom from "../../Routes/Main/ReservationRoom";
import useGetData from "../../Routes/Main/RouterGetData";

import '../../styles/main.css'

function Main() {
  const [idRoom, setIdRoom] = useState("");
  const [idUser, setIdUser] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    setIdUser(userId);
  }, []);

  const { data, error } = useGetData();

  const closeModal = () => {
    setIsModal(false);
  };

  const handleGetId = (id) => {
    setIdRoom(id);
    setIsModal(true);
  };

  const handleEvent = async (e) => {
    e.preventDefault();

    const reservation = {
      id_room: idRoom,
      id_user: idUser,
      time_start: timeStart,
      time_close: timeEnd,
    };

    console.log(reservation)

    await ReservationRoom(reservation);
    setIsModal(false);
  };

  return (
    <>
      {error && <div>{error.message}</div>}

      <div className="table">
        <div className="title_table">Table of rooms</div>

        <table>
          <thead>
            <tr>
              <th>Name's room</th>
              <th>Capacity's room</th>
              <th>Resources's room</th>
              <th>Status's room</th>
              <th>Actions</th>
            </tr>
          </thead>
          {data && <RenderRoom data={data} onReservationId={handleGetId} />}
        </table>
      </div>

      {/*Modal for reservation room*/}
      {isModal && (
        <div id="modal_reservation">
          <div className="header_modal">
            <div className="title_modal">
              <h2>Reservation room</h2>
            </div>

            <div className="button">
              <button onClick={closeModal} className="close_button">
                Close
              </button>
            </div>
          </div>

          <form id="form_reservation" onSubmit={handleEvent}>
            <div className="input_group">
              <label htmlFor="time_start_room">Choose time start:</label>
              <input
                type="datetime-local"
                name="time_start_room"
                id="time_start_room"
                value={timeStart}
                onChange={(e) => setTimeStart(e.target.value)}
              />
            </div>

            <div className="input_group">
              <label htmlFor="time_close_room">Choose time close:</label>
              <input
                type="datetime-local"
                name="time_close_room"
                id="time_close_room"
                value={timeEnd}
                onChange={(e) => setTimeEnd(e.target.value)}
              />
            </div>

            <div className="input_group">
              <input id="reserve_button" type="submit" value="Reserve" />
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Main;
