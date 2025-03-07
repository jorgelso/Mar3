import { Person } from "../types/person";

interface SidebarProps {
  dataHistory?: Person[];
}

export default function Sidebar({ dataHistory }: SidebarProps) {
  return (
    <aside className="flex flex-col bg-gray-700 w-lg min-h-full text-center items-center">
      <div className="w-4/6">
        <div className="bg-white px-5 mt-5 rounded-md">
          <p className="">History</p>
        </div>

        {dataHistory?.map((person, index) => (
          <div
            key={index}
            className="flex bg-white px-5 mt-5 rounded-md w-full justify-between items-center"
          >
            <div className="flex flex-col">
              <p>{`${person.name.first} ${person.name.last}`}</p>
              <p>{person.phone}</p>
            </div>
            <img
              src={person.picture.thumbnail}
              alt="Profile"
              className="rounded-2xl w-12 h-12 flex-shrink-0"
            />
          </div>
        ))}
      </div>
    </aside>
  );
}