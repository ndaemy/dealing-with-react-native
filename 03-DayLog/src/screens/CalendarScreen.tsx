import { format } from 'date-fns';
import { useContext, useMemo, useState } from 'react';
import { MarkedDates } from 'react-native-calendars/src/types';

import { CalendarView } from '../components/CalendarView';
import { LogContext } from '../contexts/LogContext';
import { FeedList } from '../components/FeedList';

export const CalendarScreen = () => {
  const { logs } = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  );

  const markedDates: MarkedDates = useMemo(
    () =>
      logs.reduce((acc, log) => {
        const formattedDate = format(new Date(log.date), 'yyyy-MM-dd');
        acc[formattedDate] = { marked: true };
        return acc;
      }, {} as MarkedDates),
    [logs]
  );

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate
  );

  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
};
