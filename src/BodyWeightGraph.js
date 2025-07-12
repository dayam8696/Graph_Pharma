import React, { useRef } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import html2canvas from 'html2canvas';

const BodyWeightGraph = () => {
  const chartRef = useRef(null);

  const handleDownload = async () => {
    if (!chartRef.current) return;

    const canvas = await html2canvas(chartRef.current);
    const dataURL = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'body_weight_graph.png';
    link.click();
  };

  const data = [
    {
      time: '-4th Week',
      'Normal Control': 108,
      'Diabetic Control': 171,
      'DIA+ERT(5)': 99.5,
      'DIA+ERT(10)': 104.6,
      'DIA+UMB(40)': 99,
      'DIA+ERT(5)+MET(200)': 100.3,
      'DIA+ERT(5)+MET(200)+UMB(20)': 102.5
    },
    {
      time: '0 Day',
      'Normal Control': 147.1,
      'Diabetic Control': 195.1,
      'DIA+ERT(5)': 124.0,
      'DIA+ERT(10)': 129,
      'DIA+UMB(40)': 125.6,
      'DIA+ERT(5)+MET(200)': 123.5,
      'DIA+ERT(5)+MET(200)+UMB(20)': 124
    },
    {
      time: '3rd Week',
      'Normal Control': 162.3,
      'Diabetic Control': 201.1,
      'DIA+ERT(5)': 136.8,
      'DIA+ERT(10)': 141.8,
      'DIA+UMB(40)': 140.8,
      'DIA+ERT(5)+MET(200)': 140.1,
      'DIA+ERT(5)+MET(200)+UMB(20)': 143
    },
    {
      time: '6th Week',
      'Normal Control': 191.8,
      'Diabetic Control': 211.5,
      'DIA+ERT(5)': 167,
      'DIA+ERT(10)': 180.3,
      'DIA+UMB(40)': 177.8,
      'DIA+ERT(5)+MET(200)': 180.6,
      'DIA+ERT(5)+MET(200)+UMB(20)': 174.3
    }
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button 
        onClick={handleDownload}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#ff9500',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        Download PNG
      </button>

      <div
        ref={chartRef}
        style={{
          width: '80%',
          maxWidth: '900px',
          height: '650px',
          padding: '20px',
          margin: '0 auto',
          backgroundColor: '#f9f9f9',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '30px'
          }}
        >
          Body Weight (g)
        </h2>
        <ResponsiveContainer width="100%" height="85%">
          <LineChart
            data={data}
            margin={{
              top: 30,
              right: 100,
              left: 60,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis
              dataKey="time"
              tick={{ fontSize: 14, fontWeight: 'bold' }}
              axisLine={{ stroke: '#333', strokeWidth: 2 }}
              tickLine={{ stroke: '#333', strokeWidth: 2 }}
              label={{
                value: 'Time',
                position: 'insideBottom',
                offset: -10,
                style: {
                  textAnchor: 'middle',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }
              }}
            />
            <YAxis
              label={{
                value: 'Body Weight (g)',
                angle: -90,
                position: 'insideLeft',
                style: {
                  textAnchor: 'middle',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }
              }}
              tick={{ fontSize: 14, fontWeight: 'bold' }}
              axisLine={{ stroke: '#333', strokeWidth: 2 }}
              tickLine={{ stroke: '#333', strokeWidth: 2 }}
              domain={[80, 220]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '2px solid #ccc',
                borderRadius: '6px',
                fontSize: '14px',
                padding: '10px'
              }}
            />
            <Legend
              wrapperStyle={{
                paddingTop: '30px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
              iconType="line"
            />

            <Line
              type="monotone"
              dataKey="Normal Control"
              stroke="#ff9500"
              strokeWidth={4}
              dot={{ fill: '#ff9500', strokeWidth: 2, r: 6 }}
              name="NORMAL"
            />
            <Line
              type="monotone"
              dataKey="Diabetic Control"
              stroke="#e60026"
              strokeWidth={4}
              dot={{ fill: '#e60026', strokeWidth: 2, r: 6 }}
              name="DIABETIC"
            />
            <Line
              type="monotone"
              dataKey="DIA+ERT(5)"
              stroke="#b8218a"
              strokeWidth={4}
              dot={{ fill: '#b8218a', strokeWidth: 2, r: 6 }}
              name="DIA+ERT(5)"
            />
            <Line
              type="monotone"
              dataKey="DIA+ERT(10)"
              stroke="#d47bb3"
              strokeWidth={4}
              dot={{ fill: '#d47bb3', strokeWidth: 2, r: 6 }}
              name="DIA+ERT(10)"
            />
            <Line
              type="monotone"
              dataKey="DIA+UMB(40)"
              stroke="#1e90ff"
              strokeWidth={4}
              dot={{ fill: '#1e90ff', strokeWidth: 2, r: 6 }}
              name="DIA+UMB(40)"
            />
            <Line
              type="monotone"
              dataKey="DIA+ERT(5)+MET(200)"
              stroke="#00bfff"
              strokeWidth={4}
              dot={{ fill: '#00bfff', strokeWidth: 2, r: 6 }}
              name="DIA+ERT(5)+MET(200)"
            />
            <Line
              type="monotone"
              dataKey="DIA+ERT(5)+MET(200)+UMB(20)"
              stroke="#333333"
              strokeWidth={4}
              dot={{ fill: '#333333', strokeWidth: 2, r: 6 }}
              name="DIA+ERT(5)+MET(200)+UMB(20)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BodyWeightGraph;
