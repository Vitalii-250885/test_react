import UserItem from "../userItem/UserItem";

import css from "./UsersList.module.css";

const UsersList = () => {
  return (
    <ul className={css.list}>
      <UserItem />
    </ul>
  );
};

export default UsersList;
