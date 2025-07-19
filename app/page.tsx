import { getUsers } from "@/api/users";
import type { User } from "@/types/users";
export default async function Home() {
  const users:User[]=await getUsers();
  return (
    <div>
      {users.map((user)=>(
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}
