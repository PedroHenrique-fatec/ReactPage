const ReservationRoom = async (reservation) => {
  try {
    const response = await fetch(
      "http://localhost:3000/reservations/create-reservation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservation),
      }
    );
    const data = await response.json();
    alert(data.message);
  } catch (error) {
    console.error(error);
  }
};

export default ReservationRoom;