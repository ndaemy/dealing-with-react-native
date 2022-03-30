import React from 'react';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

type CalendarViewProps = {
  markedDates: {
    [key: string]: {
      marked: boolean;
    };
  };
  selectedDate: string;
  onSelectDate: React.Dispatch<React.SetStateAction<string>>;
};

const CalendarView: React.FC<CalendarViewProps> = ({
  markedDates,
  selectedDate,
  onSelectDate,
}) => {
  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedSelectedDates}
      onDayPress={day => {
        onSelectDate(day.dateString);
      }}
      theme={{
        selectedDayBackgroundColor: '#009688',
        arrowColor: '#009688',
        dotColor: '#009688',
        todayTextColor: '#009688',
      }}
    />
  );
};

export default CalendarView;
