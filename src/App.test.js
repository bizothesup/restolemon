import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/bookingpage/BookingForm';

describe('BookingForm', () => {
  it('submits the form', () => {
    const mockUpdateTimes = jest.fn();
    const mockAvailableTimes = ['10:00 AM', '12:00 PM'];
    const { getByLabelText, getByText } = render(
      <BookingForm updateTimes={mockUpdateTimes} availableTimes={mockAvailableTimes} />
    );

    fireEvent.change(getByLabelText(/first name/i), { target: { value: 'John' } });
    fireEvent.change(getByLabelText(/last name/i), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(getByLabelText(/phone number/i), { target: { value: '1234567890' } });
    fireEvent.change(getByLabelText(/guest/i), { target: { value: '2' } });
    fireEvent.change(getByLabelText(/date/i), { target: { value: '2023-08-24' } });
    fireEvent.change(getByLabelText(/time/i), { target: { value: '10:00 AM' } });
    fireEvent.change(getByLabelText(/occasion/i), { target: { value: 'Anniversary' } });
    fireEvent.change(getByLabelText(/comment/i), { target: { value: 'Test comment' } });
    fireEvent.click(getByText(/book table/i));

    expect(screen.getByText(/Successfull/i)).toBeInTheDocument();

    expect(getByLabelText(/first name/i)).toHaveValue('');
    expect(getByLabelText(/last name/i)).toHaveValue('');

    expect(mockUpdateTimes).toHaveBeenCalledWith(new Date('2023-08-24'));

    fireEvent.click(getByText(/close/i));
    expect(screen.queryByText(/success/i)).not.toBeInTheDocument();
  });
});
