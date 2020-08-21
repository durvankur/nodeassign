
const express = require("express");
const { insertData } = require("../controllers/datacontroller");
const { sendError, sendResponse } = require("../utility/index");
const messages = require("../constants/sendmessages");
const reviewrouter = express.Router();

reviewrouter.get("/getdata", async(request,response) => {
  try {
    const result = await insertData();
    return sendResponse(response, result);
  } catch(err) {
    return sendError(response, err.sqlMessage || messages.something_went_wrong);
  }
});

module.exports = reviewrouter;
