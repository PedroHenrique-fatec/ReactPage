const RenderRoom = ({ data, onReservationId }) => {
  const listRooms = data.map((room) => {
    if (room.is_open === 1) {
      room.is_open = "open";
    } else {
      room.is_open = "closed";
    }

    return (
      <tr key={room.id_room}>
        <td>{room.name_room}</td>
        <td>{room.capacity_room}</td>
        <td>{room.resources_room}</td>
        <td>{room.is_open}</td>
        <td>
          <button
            className="show_modal"
            onClick={() => onReservationId(room.id_room)}
          >
            Reserve
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <tbody>{listRooms}</tbody>
    </>
  );
};

export default RenderRoom;
