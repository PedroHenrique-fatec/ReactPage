const UserLogout = async () => {
  const userId = localStorage.getItem("userId");
  try {
    const response = await fetch("http://localhost:3000/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });
    const data = await response.json();
    alert(data.message);
    if (data.redirect) {
      localStorage.removeItem("userId");
      window.location.href = data.redirect;
    }
  } catch (error) {
    console.error(error);
  }
};

export default UserLogout;