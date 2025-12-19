import { Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { UserRole } from '../App';

interface SignalListProps {
  userRole: UserRole;
}

const signals = [
  { id: 'S001', location: 'Main St & 5th Ave', status: 'active', uptime: '99.8%', lastMaintenance: 'Dec 15, 2025', zone: 'Zone A' },
  { id: 'S002', location: 'Oak Rd & Elm St', status: 'active', uptime: '98.5%', lastMaintenance: 'Dec 10, 2025', zone: 'Zone A' },
  { id: 'S003', location: 'Park Ave & 3rd St', status: 'warning', uptime: '95.2%', lastMaintenance: 'Dec 12, 2025', zone: 'Zone B' },
  { id: 'S004', location: 'River Rd & Main St', status: 'active', uptime: '99.9%', lastMaintenance: 'Dec 14, 2025', zone: 'Zone B' },
  { id: 'S005', location: 'Broadway & 2nd Ave', status: 'maintenance', uptime: '97.1%', lastMaintenance: 'Dec 18, 2025', zone: 'Zone C' },
  { id: 'S006', location: 'Hill St & Oak Ave', status: 'active', uptime: '99.5%', lastMaintenance: 'Dec 11, 2025', zone: 'Zone C' },
  { id: 'S007', location: 'Lake Dr & Pine St', status: 'error', uptime: '89.3%', lastMaintenance: 'Dec 8, 2025', zone: 'Zone A' },
  { id: 'S008', location: 'Valley Rd & Cedar Ave', status: 'active', uptime: '99.2%', lastMaintenance: 'Dec 16, 2025', zone: 'Zone B' },
];

export function SignalList({ userRole }: SignalListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredSignals = signals.filter((signal) => {
    const matchesSearch = signal.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         signal.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || signal.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-700',
      warning: 'bg-yellow-100 text-yellow-700',
      error: 'bg-red-100 text-red-700',
      maintenance: 'bg-gray-100 text-gray-700',
    }[status] || 'bg-gray-100 text-gray-700';

    return (
      <span className={`px-2 py-1 rounded text-xs ${styles}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-gray-900">Traffic Signals</h2>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search signals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
              {userRole === 'admin' && <option value="maintenance">Maintenance</option>}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm text-gray-600">Signal ID</th>
              <th className="text-left py-3 px-4 text-sm text-gray-600">Location</th>
              <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
              <th className="text-left py-3 px-4 text-sm text-gray-600">Uptime</th>
              {userRole === 'admin' && (
                <>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Last Maintenance</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Zone</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredSignals.map((signal) => (
              <tr key={signal.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-900">{signal.id}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{signal.location}</td>
                <td className="py-3 px-4">{getStatusBadge(signal.status)}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{signal.uptime}</td>
                {userRole === 'admin' && (
                  <>
                    <td className="py-3 px-4 text-sm text-gray-700">{signal.lastMaintenance}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{signal.zone}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {filteredSignals.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No signals found matching your criteria
        </div>
      )}
    </div>
  );
}
