import UserDisplay from "./components/UserDisplay";
import type { User } from "./types";

function App() {
  const users: User[] = [
    {
      name: "John",
      messages: [{ body: "heyyy" }, { body: "derrr" }],
    },
  ];
  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center">
      {users.map((user, index) => (
        <UserDisplay user={user} key={index} />
      ))}
    </div>
  );
}

export default App;
