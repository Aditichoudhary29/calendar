import { useEffect, useState } from "react";
import {
  Typography,
  IconButton,
  Modal,
  Box,
  Button,
  TextField,
} from "@mui/material";
import {
  BlockContainer,
  RightCalendarContainer,
  DateBlock,
  HeaderContainer,
} from "./rightCalendar-style";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const RightCalendarComponent = ({ currentDate, onMonthChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});
  const [eventText, setEventText] = useState("");

  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const daysArray = [];

    for (let i = 0; i < date.getDay(); i++) {
      daysArray.push(null);
    }

    while (date.getMonth() === month) {
      daysArray.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return daysArray;
  };

  useEffect(() => {
    const storedEvents = localStorage.getItem("calendarEvents");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(events).length > 0) {
      localStorage.setItem("calendarEvents", JSON.stringify(events));
    }
  }, [events]);
  const handleDateClick = (day) => {
    setSelectedDate(day);
    setEventText(events[day.toDateString()] || ""); // Load saved event if exists
  };

  const handleSaveEvent = () => {
    if (selectedDate) {
      setEvents((prev) => ({
        ...prev,
        [selectedDate.toDateString()]: eventText,
      }));
    }
    setSelectedDate(null); // Close modal
  };

  const days = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <RightCalendarContainer>
      <HeaderContainer>
        <IconButton onClick={() => onMonthChange(-1)}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography fontSize={"3rem"} fontWeight={900} color="#563A9C">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </Typography>
        <IconButton onClick={() => onMonthChange(1)}>
          <ArrowForwardIosIcon />
        </IconButton>
      </HeaderContainer>

      <BlockContainer>
        <Typography>Sunday</Typography>
        <Typography>Monday</Typography>
        <Typography>Tuesday</Typography>
        <Typography>Wednesday</Typography>
        <Typography>Thursday</Typography>
        <Typography>Friday</Typography>
        <Typography>Saturday</Typography>
        {days.map((day, index) =>
          day ? (
            <DateBlock key={index} onClick={() => handleDateClick(day)}>
              {day.getDate()}
              {events[day.toDateString()] && <small>📌</small>}{" "}
              {/* Indicate saved event */}
            </DateBlock>
          ) : (
            <DateBlock key={index} style={{ visibility: "hidden" }} />
          )
        )}
      </BlockContainer>

      <Modal
        open={!!selectedDate}
        onClose={() => setSelectedDate(null)}
        aria-labelledby="event-modal-title"
        aria-describedby="event-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#EBEAFF",
            boxShadow: 24,
            p: 4,
            borderRadius: "1.25rem",
          }}
        >
          <Typography id="event-modal-title" variant="h6" component="h2">
            Add Event for {selectedDate && selectedDate.toDateString()}
          </Typography>
          <TextField
            fullWidth
            value={eventText}
            onChange={(e) => setEventText(e.target.value)}
            placeholder="Write your event here..."
            multiline
            rows={4}
            sx={{ mt: 2, mb: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleSaveEvent}
            sx={{ mr: 2, backgroundColor: "#563A9C" }}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setSelectedDate(null)}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </RightCalendarContainer>
  );
};
