import { useEffect, useState } from "react";
import Admin from "../../Routes/Admin/Admin";

function RenderAdmin() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/admin/get-all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-User-ID": localStorage.getItem("userId"),
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const { users, rooms, reservations } = await response.json();

        setUsers(users);
        setRooms(rooms);
        setReservations(reservations);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading Admin data...</div>;
  if (error) return <div>Error: {error}</div>;

  return <Admin users={users} rooms={rooms} reservations={reservations} />;
}

export default RenderAdmin;
