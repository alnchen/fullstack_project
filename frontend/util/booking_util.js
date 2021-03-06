export const fetchAllBookings = () => (
  $.ajax({
    method: 'GET',
    url: 'api/bookings',
  })
);

export const addBooking = (booking) => (
  $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data: booking
  })
);

export const deleteBooking = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/bookings/${id}`,
  })
);
