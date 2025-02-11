import { useState, useMemo, useEffect } from "react";
import moment from "moment-jalaali";
import { useNavigate, useLocation } from "react-router-dom";

const dayNames = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "جمعه",
];

export const useDateService = () => {
  const today = moment().format("jYYYY/jMM/jDD");
  const [activeDate, setActiveDate] = useState<string>(today);
  const [selectedDate, setSelectedDate] = useState<string>(today);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (activeDate) {
      const queryParams = new URLSearchParams(location.search);
      queryParams.set("activeDate", activeDate);
      navigate({
        pathname: location.pathname,
        search: queryParams.toString(),
      });
    }
  }, [activeDate, location, navigate]);

  const weekDays = useMemo(() => {
    const startOfWeek = moment(today, "jYYYY/jMM/jDD").startOf("week");
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(startOfWeek.clone().add(i, "days").format("jYYYY/jMM/jDD"));
    }
    return days;
  }, [today]);

  const setDate = (date: string) => {
    setActiveDate(date);
  };

 

  const getDayName = (date: string) => {
    const index = weekDays.indexOf(date);
    return dayNames[index];
  };

  console.log({ activeDate, selectedDate });

  return {
    today,
    weekDays,
    activeDate,
    selectedDate,
    setDate,
    setSelectedDate,
    getDayName,
  };
};
