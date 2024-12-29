const FillTableRoom = (data) => {
  const rooms = data.rooms;

  const listRooms = rooms.map((room) => {
    if (room.is_open === 0) {
      room.is_open = "close";
    } else {
      room.is_open = "open";
    }

    return (
      <tr>
        <td>{room.id_room}</td>
        <td>{room.name_room}</td>
        <td>{room.capacity_room}</td>
        <td>{room.resources_room}</td>
        <td>{room.time_open}</td>
        <td>{room.is_open}</td>
        <td>
          <button>Excluir</button>
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

export default FillTableRoom;
