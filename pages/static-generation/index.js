import UserItem from "../../components/StaticGeneration/UserItem";

export default function UserList({ users }) {
  console.log({ users });
  return (
    <>
      <h1>User List</h1>
      {users?.map((user) => {
        return <UserItem key={user?.id} user={user} />;
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
