import React from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Filler,
  Legend 
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function PerformanceChart() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Sample data based on image
  const scores = [78, 80, 96, 72, 85, 90, 85];
  
  // Custom tooltip to display the highlighted point
  const customTooltip = {
    callbacks: {
      label: function(context: any) {
        return context.parsed.y + '%';
      }
    },
    displayColors: false,
    backgroundColor: '#6b46c1',
    titleFont: {
      size: 14
    },
    bodyFont: {
      size: 14,
      weight: 'bold'
    },
    padding: 10,
    cornerRadius: 6
  };
  
  // Custom point logic to highlight the 96% peak
  const pointRadius = scores.map(score => score === 96 ? 6 : 0);
  const pointBackgroundColor = scores.map(score => score === 96 ? '#6b46c1' : 'transparent');
  const pointBorderColor = scores.map(score => score === 96 ? '#ffffff' : 'transparent');
  const pointBorderWidth = scores.map(score => score === 96 ? 2 : 0);
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: '#9CA3AF'
        }
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: function(value: number) {
            return value + '%';
          },
          color: '#9CA3AF'
        },
        grid: {
          color: '#F3F4F6'
        },
        border: {
          dash: [5, 5]
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: customTooltip
    },
    elements: {
      line: {
        tension: 0.4, // smooth curve
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    }
  };

  const data = {
    labels: days,
    datasets: [
      {
        label: 'Performance',
        data: scores,
        borderColor: '#8B5CF6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        pointRadius: pointRadius,
        pointBackgroundColor: pointBackgroundColor,
        pointBorderColor: pointBorderColor,
        pointBorderWidth: pointBorderWidth,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#8B5CF6',
        pointHoverBorderColor: '#ffffff',
        pointHoverBorderWidth: 2,
      }
    ]
  };

  // Render custom annotation for 96%
  const renderCustomAnnotation = () => {
    // Calculate position (Wednesday is at index 2)
    return (
      <div 
        className="absolute text-sm font-semibold text-purple-800"
        style={{ 
          left: `calc(${(2 / 6) * 100}% - 8px)`, 
          top: '28%' 
        }}
      >
        96%
      </div>
    );
  };

  return (
    <div className="relative h-full w-full">
      <Line options={options as any} data={data} />
      {renderCustomAnnotation()}
    </div>
  );
}