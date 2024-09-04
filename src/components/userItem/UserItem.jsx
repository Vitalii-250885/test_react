import { useSelector } from "react-redux";

import css from "./UserItem.module.css";

const UserItem = () => {
  const users = useSelector((state) => state.users);

  return (
    <>
      {users.map((user) => (
        <li key={user.firstName} className={css.item}>
          <span>
            {user.firstName} {user.lastName}
          </span>
          <button type="button">Delete</button>
        </li>
      ))}
    </>
  );
};

export default UserItem;
