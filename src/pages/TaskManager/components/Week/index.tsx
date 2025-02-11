import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { green, yellow, red } from "@mui/material/colors";
import { useDateService } from "../../hooks/useDateService";

const Week: React.FC = () => {
  const { today, weekDays, activeDate, setDate, getDayName } = useDateService();

  return (
    <Box sx={styles.container}>
      {weekDays.map((date, index) => {
        const isToday = date === today;
        const isActive = date === activeDate;

        return (
          <Card
            key={index}
            sx={{
              ...styles.card,
              backgroundColor: isActive
                ? green[500]
                : isToday
                  ? yellow[200]
                  : "#fff",
              border: isActive ? `2px solid ${green[700]}` : "1px solid #ddd",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
            onClick={() => setDate(date)}
          >
            <CardContent>
              <Typography sx={styles.dayText}>
                {getDayName(date)} {/* روز هفته به فارسی */}
              </Typography>
              <Typography variant="body2" sx={styles.dateText}>
                {date}
              </Typography>
              {isToday && (
                <Typography variant="caption" sx={styles.todayText}>
                  امروز
                </Typography>
              )}
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: 2,
    direction: "ltr",
  },
  card: {
    width: 80,
    height: 80,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    margin: 1,
    cursor: "pointer",
    transition: "transform 0.3s",
  },
  dayText: {
    fontSize: "12px",
    fontWeight: 500,
    color: "#333",
  },
  dateText: {
    fontSize: "12px",
    color: "#555",
  },
  todayText: {
    color: red[500],
    fontSize: "10px",
    marginTop: 1,
  },
};

export default Week;
