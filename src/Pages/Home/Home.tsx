import React, { useEffect, useState } from "react";
import "./Home.css";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Home: React.FC = () => {
  const [amount, setAmount] = useState<any>();
  const optionsDouhnut = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const optionsLine = {
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

  const dataLine = {
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

  const dataDouhnut = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "Vé",
        data: [12, 19],
        backgroundColor: ["#4F75FF", "#FF8A48"],
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
        <Line
          className="Chart_home_line"
          options={optionsLine}
          data={dataLine}
        />
        <div className="amount">Tổng doanh thu theo tuần </div>
        <div className="amount_number">{amount}</div>
      </div>
      <div className="All_Douhnut">
        <div className="Douhnut_Family_Event">
          <div>
            <div className="name_Douhnut">Gói gia đình</div>
            <div>
              <Doughnut
                className="Douhnut"
                options={optionsDouhnut}
                data={dataDouhnut}
              />
            </div>
          </div>
          <div>
            <div className="name_Douhnut">Gói sự kiện</div>
            <div>
              <Doughnut
                className="Douhnut"
                options={optionsDouhnut}
                data={dataDouhnut}
              />
            </div>
          </div>
          <div className="deription_douhnut">
            <div>
              <div className="color_deription1"></div>
              <span>Vé đã sử dụng</span>
            </div>
            <div>
              <div className="color_deription2"></div>
              <span>Vé chưa sử dụng</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
