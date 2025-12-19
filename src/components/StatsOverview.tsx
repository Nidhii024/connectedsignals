import { Activity, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { UserRole } from '../App';

interface StatsOverviewProps {
  userRole: UserRole;
}

export function StatsOverview({ userRole }: StatsOverviewProps) {
  const stats = [
    {
      label: 'Total Signals',
      value: '248',
      icon: Activity,
      color: 'bg-blue-100 text-blue-600',
      visible: true,
    },
    {
      label: 'Active & Operating',
      value: '235',
      icon: CheckCircle,
      color: 'bg-green-100 text-green-600',
      visible: true,
    },
    {
      label: 'Alerts & Issues',
      value: '8',
      icon: AlertTriangle,
      color: 'bg-red-100 text-red-600',
      visible: true,
    },
    {
      label: 'Under Maintenance',
      value: '5',
      icon: Clock,
      color: 'bg-yellow-100 text-yellow-600',
      visible: userRole === 'admin',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats
        .filter((stat) => stat.visible)
        .map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
