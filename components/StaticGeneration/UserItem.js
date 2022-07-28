const UserItem = ({ user }) => {
  return (
    <>
      <div key={user.id}>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
      </div>
    </>
  );
};

export default UserItem;
