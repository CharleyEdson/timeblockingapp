import React from "react";
import "./TimeBlockArea.css";

const TimeBlock = () => {
  return <div class="border-solid border-2 border-indigo-600 h-96 m-10 flex-col">
    <div class="border-solid border-2 border-indigo-600 w-1/6 items-center">1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>;
};

export default TimeBlock;

// const startHour = 8;
//   const endHour = 19;
//   const hours = Array.from({ length: endHour - startHour + 1 }, (_, i) => startHour + i);

// <div className="time-block">
//       {hours.map((hour, index) => (
//         <React.Fragment key={hour}>
//           <div className="hour-line" style={{ top: `${(index / hours.length) * 100}%` }}>
//             <span className="hour-label">{hour}:00</span>
//           </div>
//           <div
// className="half-hour-line"
//             style={{ top: `${((index + 0.5) / hours.length) * 100}%` }}
//           />
//         </React.Fragment>
//       ))}
//       {children}
//     </div>
