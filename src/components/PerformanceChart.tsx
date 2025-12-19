import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { time: '00:00', uptime: 98, incidents: 2 },
  { time: '04:00', uptime: 99, incidents: 1 },
  { time: '08:00', uptime: 97, incidents: 4 },
  { time: '12:00', uptime: 96, incidents: 5 },
  { time: '16:00', uptime: 98, incidents: 3 },
  { time: '20:00', uptime: 99, incidents: 1 },
  { time: '24:00', uptime: 99, incidents: 1 },
];

export function PerformanceChart() {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h2 className="text-gray-900 mb-4">System Performance (24h)</h2>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="time" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px' 
            }} 
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="uptime" 
            stroke="#10b981" 
            strokeWidth={2}
            name="Uptime %" 
          />
          <Line 
            type="monotone" 
            dataKey="incidents" 
            stroke="#ef4444" 
            strokeWidth={2}
            name="Incidents" 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
