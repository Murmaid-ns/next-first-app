import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {

  return (
    <MainContainer keywords={"User list"} title={"User List"}>
      <h1>Users list</h1>
      <ul>
        {users.map(({ name, id }) => (
          <li key={id}>
            <Link href={`/users/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return {
        props: {users}
    }
}