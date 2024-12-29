const FillTableUser = (data) => {
  const users = data.users;

  const listUsers = users.map((user) => {
    if (user.is_logged_in === 0) {
      user.is_logged_in = "Offline";
    } else {
      user.is_logged_in = "Online";
    }

    return (
      <tr key={user.id}>
        <td>{user.id_user}</td>
        <td>{user.name_user}</td>
        <td>{user.email_user}</td>
        <td>{user.password_user}</td>
        <td>{user.is_logged_in}</td>
        <td>
          <button>Excluir</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <tbody>{listUsers}</tbody>
    </>
  );
};

export default FillTableUser;
