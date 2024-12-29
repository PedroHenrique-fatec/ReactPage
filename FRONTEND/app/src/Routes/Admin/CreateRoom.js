const CreateRoom = async (room) => {
    try {
        const response = fetch("http://localhost:3000/rooms/create-room", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(room),
        });
    
        const data = await response.json();
    
        console.log(data);
        if (data.ok) { 
          alert("Room created successfully");
        }
      } catch (error) {
        console.error("Error creating room:", error);
      }
}

export default CreateRoom;