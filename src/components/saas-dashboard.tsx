import React, { useState } from 'react';
import { Bell, BarChart2, AlertCircle, MessageSquare, Users, HelpCircle, Upload, FileText, Video, Radio, Newspaper, Send } from 'lucide-react';

const Sidebar = ({ activeItem, setActiveItem }) => {
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

const Header = ({ activeItem }) => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">{activeItem}</h1>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-800">
          <Bell size={20} />
        </button>
        <div className="flex items-center space-x-2">
          <span>1h 0m</span>
          <span>0h 0m</span>
        </div>
        <button className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
          Add more credits
        </button>
        <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
      </div>
    </header>
  );
};

const DashboardHome = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-white">Total Mentions</h3>
          <p className="text-3xl font-bold text-green-500">1,234</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-white">Sentiment Overview</h3>
          <p className="text-3xl font-bold text-green-500">Positive</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-white">Pending Alerts</h3>
          <p className="text-3xl font-bold text-yellow-500">15</p>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4 text-white">Recent Notifications</h3>
        <ul className="text-gray-300">
          <li className="mb-2 pb-2 border-b border-gray-700">New mention on Twitter</li>
          <li className="mb-2 pb-2 border-b border-gray-700">High priority alert: News article</li>
          <li className="mb-2 pb-2 border-b border-gray-700">Response required: Customer inquiry</li>
        </ul>
      </div>
    </div>
  );
};

const RealTimeNotifications = () => {
  // Implementation for Real-Time Notifications
};

const CategorizedAlerts = () => {
  // Implementation for Categorized Alerts
};

const ResponseManagement = () => {
  // Implementation for Response Management
};

const UserManagement = () => {
  // Implementation for User Management
};

const ReportsAnalytics = () => {
  // Implementation for Reports and Analytics
};

const HelpSupport = () => {
  // Implementation for Help and Support
};

const BotRadio = () => {
  return (
    <div className="p-6">
      <div className="bg-gray-800 p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Upload and Transcribe Audio</h3>
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 flex flex-col items-center justify-center text-gray-400">
          <Upload size={32} className="mb-4" />
          <p className="text-center mb-2">Drag and drop audio files to upload</p>
          <p className="text-center text-sm mb-4">Your audio will be transcribed using Assembly AI</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Select files</button>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4 text-white">Transcription Management</h3>
        <textarea className="w-full h-48 bg-gray-700 text-white p-2 rounded" placeholder="Transcription will appear here..."></textarea>
        <div className="mt-4 flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit Transcript</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Send via Email</button>
        </div>
      </div>
    </div>
  );
};

const BotPrensa = () => {
  return (
    <div className="p-6">
      <div className="bg-gray-800 p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Upload and Analyze PDF</h3>
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 flex flex-col items-center justify-center text-gray-400">
          <Upload size={32} className="mb-4" />
          <p className="text-center mb-2">Drag and drop PDF files to upload</p>
          <p className="text-center text-sm mb-4">Your PDF will be analyzed using Perplexity AI</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Select files</button>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4 text-white">Analysis Results</h3>
        <textarea className="w-full h-48 bg-gray-700 text-white p-2 rounded" placeholder="Analysis results will appear here..."></textarea>
        <div className="mt-4 flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit Results</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Send via Email</button>
        </div>
      </div>
    </div>
  );
};

const BotTv = () => {
  return (
    <div className="p-6">
      <div className="bg-gray-800 p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Upload and Transcribe Video</h3>
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 flex flex-col items-center justify-center text-gray-400">
          <Upload size={32} className="mb-4" />
          <p className="text-center mb-2">Drag and drop video files to upload</p>
          <p className="text-center text-sm mb-4">Your video will be transcribed using AI</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Select files</button>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4 text-white">Transcription Management</h3>
        <textarea className="w-full h-48 bg-gray-700 text-white p-2 rounded" placeholder="Transcription will appear here..."></textarea>
        <div className="mt-4 flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit Transcript</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Send via Email</button>
        </div>
      </div>
    </div>
  );
};

const BotSendEmails = () => {
  // Implementation for BOT SEND EMAILS
};

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState('Dashboard Home');

  const renderContent = () => {
    switch (activeItem) {
      case 'Dashboard Home':
        return <DashboardHome />;
      case 'Real-Time Notifications':
        return <RealTimeNotifications />;
      case 'Categorized Alerts':
        return <CategorizedAlerts />;
      case 'Response Management':
        return <ResponseManagement />;
      case 'User Management':
        return <UserManagement />;
      case 'Reports and Analytics':
        return <ReportsAnalytics />;
      case 'Help and Support':
        return <HelpSupport />;
      case 'BOT RADIO':
        return <BotRadio />;
      case 'BOT PRENSA':
        return <BotPrensa />;
      case 'BOT TV':
        return <BotTv />;
      case 'BOT SEND EMAILS':
        return <BotSendEmails />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header activeItem={activeItem} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
