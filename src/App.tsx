import React from "react";

// Importing components
import Navbar from "./components/Navbar";
import Pomodoro from "./components/Pomodoro";
import Todo from "./components/Todo";
import Quotable from "./components/Quotable";

// Import background images
import BackgroundImage1 from './assets/floating.jpg';
import BackgroundImage2 from './assets/dreamy.jpeg';
import BackgroundImage3 from './assets/evening-sky.jpg';

// Function to get a random background image
function getRandomBackgroundImage() {
  const images = [BackgroundImage1, BackgroundImage2, BackgroundImage3];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}


// Main APP
export default function App() {
  const randomBackgroundImage = getRandomBackgroundImage();

  return (
    <div className="bg-red-400 dark:bg-slate-800">
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${randomBackgroundImage})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-screen h-screen bg-opacity-30"
      >
        <div className="grid grid-cols-2 gap-20 m-3">
          <div className="ml-20 mt-10 basis-2/4 p-4 rounded-2xl shadow-2xl bg-red-300 dark:bg-slate-600">
            <Pomodoro />
          </div>
          <div className="mr-20 mt-10 basis-2/4 p-4 rounded-2xl shadow-2xl bg-red-300 dark:bg-slate-600">
            <Todo />
          </div>
        </div>
        <div className="m-8 text-white">
          <h1 className="text-3xl font-bold mb-4">Quote of the day:</h1>
          <Quotable />
        </div>
      </div>
    </div>
  );
}
