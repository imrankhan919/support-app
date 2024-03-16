const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    product: {
      type: String,
      require: [true, "Please Select Product"],
      enum: ["iPhone", "iPad", "Macbook", "iWatch", "iPod"],
    },
    description: {
      type: String,
      require: [true, "Please Type Description Here.."],
    },
    status: {
      type: String,
      require: [true, "Please Give Status"],
      enum: ["new", "open", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
