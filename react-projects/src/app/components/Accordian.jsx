"use client"
import data from "../pages/data"
import React from 'react'
import { useState } from 'react'
export default function Accordian() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div>
    {data && data.length > 0 ? (
      data.map((item, i) => (
        <div key={item.id} className="border-b-2 p-3">
          <div
            className="cursor-pointer text-lg font-semibold"
            onClick={() => toggle(i)}
          >
            {item.question}
          </div>
          <div className={`${selected === i ? "block" : "hidden"} mt-2`}>
            {item.answer}
          </div>
        </div>
      ))
    ) : (
      <div>No data present</div>
    )}
  </div>
  )
}
