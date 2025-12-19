import { MapPin } from 'lucide-react';

const signals = [
  { id: 1, x: 20, y: 30, status: 'active' },
  { id: 2, x: 45, y: 25, status: 'active' },
  { id: 3, x: 65, y: 40, status: 'warning' },
  { id: 4, x: 30, y: 60, status: 'active' },
  { id: 5, x: 70, y: 70, status: 'error' },
  { id: 6, x: 50, y: 55, status: 'active' },
  { id: 7, x: 80, y: 35, status: 'active' },
  { id: 8, x: 15, y: 75, status: 'maintenance' },
  { id: 9, x: 55, y: 15, status: 'active' },
  { id: 10, x: 35, y: 45, status: 'active' },
];

export function SignalMap() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-500';
      case 'warning':
        return 'text-yellow-500';
      case 'error':
        return 'text-red-500';
      case 'maintenance':
        return 'text-gray-400';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h2 className="text-gray-900 mb-4">Signal Network Map</h2>
      
      <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ height: '400px' }}>
        {/* Grid lines for street effect */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Signal markers */}
        {signals.map((signal) => (
          <div
            key={signal.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform"
            style={{ left: `${signal.x}%`, top: `${signal.y}%` }}
            title={`Signal #${signal.id} - ${signal.status}`}
          >
            <MapPin className={`w-8 h-8 ${getStatusColor(signal.status)} drop-shadow-lg`} fill="currentColor" />
          </div>
        ))}
      </div>
      
      <div className="flex items-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-700">Active</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="text-gray-700">Warning</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-gray-700">Critical</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <span className="text-gray-700">Maintenance</span>
        </div>
      </div>
    </div>
  );
}
