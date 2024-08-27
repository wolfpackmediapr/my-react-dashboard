import React from 'react';
import { Bell, BarChart2, AlertCircle, MessageSquare, Users, HelpCircle, Upload, FileText, Video, Radio, Newspaper, Send } from 'lucide-react';

type SidebarProps = {
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
};

const Sidebar: React.FC<SidebarProps> = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { name: 'Dashboard Home', icon: BarChart2 },
    { name: 'Real-Time Notifications', icon: Bell },
    { name: 'Categorized Alerts', icon: AlertCircle },
    { name: 'Response Management', icon: MessageSquare },
    { name: 'User Management', icon: Users },
    { name: 'Reports and Analytics', icon: FileText },
    { name: 'Help and Support', icon: HelpCircle },
    { name: 'BOT RADIO', icon: Radio },
    { name: 'BOT PRENSA', icon: Newspaper },
    { name: 'BOT TV', icon: Video },
    { name: 'BOT SEND EMAILS', icon: Send },
  ];

  return (
    <div className="w-16 bg-gray-900 text-gray-400 h-screen flex flex-col items-center py-4">
      <div className="mb-8">
        <img src="/logo.png" alt="Logo" className="w-8 h-8" />
      </div>
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`p-3 rounded-lg mb-2 ${
              activeItem === item.name ? 'bg-green-500 text-white' : 'hover:bg-gray-800'
            }`}
            onClick={() => setActiveItem(item.name)}
          >
            <item.icon size={20} />
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
