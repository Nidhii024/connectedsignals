import { AlertTriangle, AlertCircle, Clock } from 'lucide-react';
import { UserRole } from '../App';

interface AlertsPanelProps {
  userRole: UserRole;
}

export function AlertsPanel({ userRole }: AlertsPanelProps) {
  const alerts = [
    {
      id: 1,
      type: 'critical',
      message: 'Signal #5 - Power failure detected',
      location: 'Main St & 5th Ave',
      time: '10 min ago',
      adminOnly: false,
    },
    {
      id: 2,
      type: 'warning',
      message: 'Signal #3 - Yellow light duration anomaly',
      location: 'Oak Rd & Elm St',
      time: '25 min ago',
      adminOnly: false,
    },
    {
      id: 3,
      type: 'info',
      message: 'Scheduled maintenance starting tomorrow',
      location: 'Zone C signals',
      time: '1 hour ago',
      adminOnly: true,
    },
    {
      id: 4,
      type: 'warning',
      message: 'Signal #12 - Network connectivity issue',
      location: 'Park Ave & 3rd St',
      time: '2 hours ago',
      adminOnly: false,
    },
    {
      id: 5,
      type: 'info',
      message: 'Firmware update available',
      location: '12 signals',
      time: '3 hours ago',
      adminOnly: true,
    },
  ];

  const filteredAlerts = userRole === 'admin' 
    ? alerts 
    : alerts.filter(alert => !alert.adminOnly);

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Clock className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h2 className="text-gray-900 mb-4">Recent Alerts</h2>
      
      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <div key={alert.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 mt-0.5">
              {getAlertIcon(alert.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">{alert.message}</p>
              <p className="text-xs text-gray-600 mt-1">{alert.location}</p>
              <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
        View All Alerts
      </button>
    </div>
  );
}
