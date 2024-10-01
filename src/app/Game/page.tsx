import React from "react";

export default function page() {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="flex justify-center flex-col">
        <div className="bg-slate-900 w-72 h-4/5 rounded-2xl">
          {Array(10)
            .fill(0)
            .map((_, rowIndex) => (
              <div key={rowIndex} className="flex flex-row">
                {Array(10)
                  .fill(0)
                  .map((_, colIndex) => (
                    <div key={colIndex} className="bg-red-600 w-8">
                      {rowIndex + 1}, {colIndex + 1}
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
