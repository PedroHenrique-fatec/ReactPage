const GetAll = async () => {
  try {
    const response = await fetch("http://localhost:3000/admin/get-all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-User-ID": localStorage.getItem("userId"),
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default GetAll;
