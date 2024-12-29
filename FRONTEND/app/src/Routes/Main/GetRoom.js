const GetRoom = async () => {
  try {
    const response = await fetch("http://localhost:3000/rooms/get-room", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-User-ID": localStorage.getItem("userId"),
      },
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export default GetRoom;