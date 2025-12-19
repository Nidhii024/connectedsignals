import { Activity, Users } from 'lucide-react';
import { UserRole } from '../App';

interface HeaderProps {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
}

export function Header({ userRole, setUserRole }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-gray-900">TrafficFlow Systems</h1>
            <p className="text-sm text-gray-600">Traffic Signal Management Dashboard</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setUserRole('admin')}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                userRole === 'admin'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Company View
            </button>
            <button
              onClick={() => setUserRole('client')}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                userRole === 'client'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Client View
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-700">
              {userRole === 'admin' ? 'Admin Panel' : 'Client Portal'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
