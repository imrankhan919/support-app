import axios from "axios";

const API_URL = "/api/ticket";

const fetchTickets = async (token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, option);
  return response.data;
};

const fetchTicket = async (token, id) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "/" + id, option);
  return response.data;
};

const createTicket = async (token, formData) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, formData, option);

  return response.data;
};

const ticketService = {
  fetchTickets,
  fetchTicket,
  createTicket,
};

export default ticketService;
