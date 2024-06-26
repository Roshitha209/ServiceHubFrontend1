import { configureStore } from "@reduxjs/toolkit";
import displaySlice from "../feature/displaySlice";
import apiSlice from "../feature/apiSlice";
import authSlice from "../feature/authSlice";
import serviceSlice from "../feature/serviceSlice";
import getAllServicesSlice from "../feature/getAllServicesSlice";
import getCompanyServiceSlice from "../feature/getCompanyServiceSlice";
import deleteServiceSlice from "../feature/deleteServiceSlice";
import updateServiceSlice from "../feature/updateServiceSlice";
import searchSlice from "../feature/searchSlice";
import serviceDetailByIdSlice from "../feature/serviceDetailByIdSlice";
import addBookingsSlice from "../feature/addBookingsSlice";
import ClientBookingsSlice from "../feature/ClientBookingsSlice";
import serviceProviderBookingsSlice from "../feature/serviceProviderBookingsSlice";
import bookingStatusSlice from "../feature/bookingStatusSlice";
import reviewSlice from "../feature/reviewSlice";
import pendingRegistrationSlice from "../feature/pendingRegistrationSlice";
export const reduxStore = configureStore({
  reducer: {
    display: displaySlice,
    api: apiSlice,
    auth: authSlice,
    services: serviceSlice,
    getAllServices: getAllServicesSlice,
    getCompanyServices: getCompanyServiceSlice,
    deleteService: deleteServiceSlice,
    updateService: updateServiceSlice,
    search: searchSlice,
    serviceDetail: serviceDetailByIdSlice,
    bookings: addBookingsSlice,
    reservations: ClientBookingsSlice,
    serviceProviderBookings: serviceProviderBookingsSlice,
    bookingStatus: bookingStatusSlice,
    review: reviewSlice,
    pendingRegistration: pendingRegistrationSlice,
  },
});

export default reduxStore;
