import React from "react";

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

import Image from "next/image";

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

function Chart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Orders",
        data: [21, 20, 41, 38, 43, 57, 43, 53, 55, 58, 38, 95],
        borderColor: ["rgba(142, 171, 239, 1)"],
        backgroundColor: ["rgba(142, 171, 239, 1)"],
        pointBackgroundColor: ["rgba(255, 255, 255, 1)"],
        pointBorderColor: ["rgba(142, 171, 239, 1)"],
      },

      {
        label: "Customers",
        data: [58, 42, 84, 39, 65, 57, 62, 38, 20, 44, 79, 35],
        borderColor: ["rgba(127, 218, 209, 1)"],
        backgroundColor: ["rgba(127, 218, 209, 1)"],
        pointBackgroundColor: ["rgba(255, 255, 255, 1)"],
        pointBorderColor: ["rgba(127, 218, 209, 1)"],
      },
    ],
  };

  const options = {
    tension: 0.35,
    title: {
      display: true,
      text: "Total Revenue",
    },
    scales: {
      y: {
        ticks: {
          min: 20,
          max: 100,
          stepSize: 20,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <h2 className="font-bold text-blue-card text-xl mt-3 dark:text-white">
        Total Revenue
      </h2>
      <section className="xl:grid grid-cols-54 mt-12 mb-14 mr-4 gap-4">
        <div>
          <Line data={data} options={options} />
        </div>

        <div className=" bg-slate-100  dark:bg-black rounded-3xl mt-8 lg:mt-0 text-center py-4">
          <h3 className="text-blue-card  dark:text-white font-bold lg:text-2xl">
            Product Status
          </h3>
          <section className="py-5">
            <Image
              src="/assets/bar.png"
              alt="profile-picture"
              width="170"
              height="170"
              priority
            />
          </section>

          <div className="grid grid-cols-2 ml-12 pb-4">
            <div className="flex gap-5">
              {" "}
              <div className="bg-green-900 w-5 h-5"></div>{" "}
              <span>Delivered</span>
            </div>
            <div className="flex gap-5">
              <div className=" bg-fuchsia-900 w-5 h-5"></div>{" "}
              <span>Pending</span>
            </div>
            <div className="flex gap-5 translate-x-1/2 mt-5">
              <div className="bg-orange-700 w-5 h-5"></div>{" "}
              <span>Cancelled</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Chart;
