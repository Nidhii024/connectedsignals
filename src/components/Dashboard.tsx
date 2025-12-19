import { UserRole } from '../App';
import { StatsOverview } from './StatsOverview';
import { SignalMap } from './SignalMap';
import { SignalList } from './SignalList';
import { AlertsPanel } from './AlertsPanel';
import { PerformanceChart } from './PerformanceChart';
import { MaintenanceSchedule } from './MaintenanceSchedule';

interface DashboardProps {
  userRole: UserRole;
}

export function Dashboard({ userRole }: DashboardProps) {
  return (
    <main className="max-w-7xl mx-auto px-6 py-6">
      <StatsOverview userRole={userRole} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <SignalMap />
        </div>
        <div>
          <AlertsPanel userRole={userRole} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <PerformanceChart />
        {userRole === 'admin' && <MaintenanceSchedule />}
      </div>
      
      <div className="mt-6">
        <SignalList userRole={userRole} />
      </div>
    </main>
  );
}
