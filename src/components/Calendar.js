import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, TextField } from '@mui/material';
import dayjs from 'dayjs';

export default function DateRangePicker({dates, onDatesSelected}) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  useEffect(() => {
    if (startDate) {
      const blockedDatesAfterStart = dates.filter(date =>
        dayjs(date).isAfter(startDate, 'day')
      );

      if (blockedDatesAfterStart.length > 0) {
        const earliestBlockedDate = blockedDatesAfterStart.reduce((earliest, date) =>
          dayjs(date).isBefore(earliest) ? date : earliest
        );

        setEndDate(dayjs(earliestBlockedDate).subtract(1, 'day'));
      }
    }
  }, [startDate, dates]);


  const shouldDisableDate = (date) => {
    return dates.some((blockedDate) => date.isSame(blockedDate, 'day'));
  };

  const handleNextButtonClick = () => {
    
      console.log('Start Date:', startDate);
      console.log('End Date:', endDate);
      if (startDate && endDate) {
        onDatesSelected(startDate, endDate);
      }
      
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(date) => (setStartDate(date), setEndDate(null))}
          renderInput={(params) => <TextField {...params} />}
          shouldDisableDate={shouldDisableDate}
          disablePast
        />
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={(date) => setEndDate(date)}
          renderInput={(params) => <TextField {...params} />}
          shouldDisableDate={shouldDisableDate}
          minDate={startDate}
          maxDate={endDate}
        />
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button variant="contained" color="primary" onClick={handleNextButtonClick}>
          Confirmar Reserva
        </Button>
      </div>
    </LocalizationProvider>
  );
}