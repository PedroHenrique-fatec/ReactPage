const FillTableReservation = (data) => {
  const reservations = data.reservations;

  const listReservation = reservations.map((reservation) => {

    return (
      <tr>
        <td>{reservation.id_reservation}</td>
        <td>{reservation.user_id}</td>
        <td>{reservation.room_id}</td>
        <td>{reservation.start_time}</td>
        <td>{reservation.end_time}</td>
      </tr>
    );
  });

  return (
    <>
      <tbody>{listReservation}</tbody>
    </>
  );
};

export default FillTableReservation;
