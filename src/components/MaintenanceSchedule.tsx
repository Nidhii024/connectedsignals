import { Calendar, User, Wrench } from 'lucide-react';

const maintenance = [
  {
    id: 1,
    signal: 'Signal #8',
    location: 'Broadway & 2nd Ave',
    date: 'Dec 20, 2025',
    technician: 'John Smith',
    type: 'Routine Inspection',
  },
  {
    id: 2,
    signal: 'Signal #15',
    location: 'River Rd & Main St',
    date: 'Dec 21, 2025',
    technician: 'Sarah Johnson',
    type: 'Bulb Replacement',
  },
  {
    id: 3,
    signal: 'Signal #22',
    location: 'Hill St & Oak Ave',
    date: 'Dec 22, 2025',
    technician: 'Mike Davis',
    type: 'System Upgrade',
  },
];

export function MaintenanceSchedule() {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h2 className="text-gray-900 mb-4">Upcoming Maintenance</h2>
      
      <div className="space-y-4">
        {maintenance.map((item) => (
          <div key={item.id} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-gray-900">{item.signal}</p>
                <p className="text-sm text-gray-600">{item.location}</p>
              </div>
              <Wrench className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{item.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{item.technician}</span>
              </div>
            </div>
            
            <div className="mt-2">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
