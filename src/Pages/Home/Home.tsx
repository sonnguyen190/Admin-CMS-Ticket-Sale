import React, { useEffect, useState } from "react";
import "./Home.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  const [amount, setAmount] = useState<any>();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 15,
            weight: "bold",
          },
        },
      },
    },
  };
  const datas: number[] = [
    143000000, 170000000, 150000000, 230000000, 220000000, 200000000, 180000000,
  ];

  const labels: string[] = [
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
    "CN",
  ];

  const data = {
    labels,
    datasets: [
      {
        data: datas,
        fill: false,
        borderColor: "#FF993C",
        borderWidth: 5,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.6,
        pointStyle: "line",
      },
    ],
  };
  useEffect(() => {
    handleSum(datas);
  });
  const handleSum = (arr: number[]) => {
    let sum: any = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let x: any = sum.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
    setAmount(x);
  };
  return (
    <div className="Home">
      <div className="thongke">Thống Kê</div>
      <div className="chart_home">
        <div className="doanhthu">Doanh Thu</div>
        <Line className="Chart_home_line" options={options} data={data} />
        <div className="amount">Tổng doanh thu theo tuần </div>
        <div className="amount_number">{amount}</div>
      </div>
    </div>
  );
};

export default Home;
