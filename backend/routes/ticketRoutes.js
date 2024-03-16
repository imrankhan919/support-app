const express = require("express");
const {
  getTickets,
  getTicket,
  createTicket,
} = require("../controllers/ticketController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getTickets).post(protect, createTicket);
router.route("/:id").get(protect, getTicket);

module.exports = router;
