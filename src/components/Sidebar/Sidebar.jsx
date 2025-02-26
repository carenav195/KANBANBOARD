import { useState } from "react";
import {
  ChevronLeftCircle,
  LayoutDashboard,
  Award,
  CalendarDays,
  DollarSign,
  ListChecks,
  Users,
} from "lucide-react";

const NavItem = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Tasks", icon: ListChecks, path: "/tasks" },
  { title: "Budget", icon: DollarSign, path: "/budget" },
  { title: "Family", icon: Users, path: "/family" },
  { title: "Events", icon: CalendarDays, path: "/events" },
  { title: "Rewards", icon: Award, path: "/rewards" },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`relative h-screen bg-gray-900 text-white shadow-lg border-r border-gray-800 transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center justify-between mb-6">
          {!isCollapsed && (
            <h2 className="text-xl font-bold text-white tracking-wide">
              FamilyTask
            </h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition absolute -right-4 top-6"
          >
            <ChevronLeftCircle
              className={`w-6 h-6 transition-transform duration-300 ${
                isCollapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <nav className="space-y-4">
          {NavItem.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition group relative"
            >
              <item.icon className="w-6 h-6 text-gray-300" />
              {!isCollapsed && (
                <span className="text-sm font-medium text-gray-300">
                  {item.title}
                </span>
              )}
              {isCollapsed && (
                <div className="absolute left-full ml-3 px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-md invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.title}
                </div>
              )}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
