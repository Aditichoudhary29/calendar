import React, { useState } from "react";
import { DashboardContainer } from "./dashboard.style";
import { LeftImage } from "../../components/LeftImageComponent/leftImage-Component";
import { RightCalendarComponent } from "../../components/RightCalendar/rightCalendar-component";

export const DashboardPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleMonthChange = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(
        prev.getFullYear(),
        prev.getMonth() + direction,
        1
      );
      return newDate;
    });
  };

  return (
    <DashboardContainer>
      <LeftImage currentDate={currentDate} />
      <RightCalendarComponent
        currentDate={currentDate}
        onMonthChange={handleMonthChange}
      />
    </DashboardContainer>
  );
};
