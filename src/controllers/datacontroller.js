
const { insertRecord } = require("../models/data");
const { sendResult } = require("../utility/index");
const { moment, axios } = require("../utility/librarydata");
const { isPrime } = require("./functions");
const messages = require("../constants/sendmessages");

const insertData = async() => {
  try {
    const obj = {
      insertdate: new Date(),
    };
    // const result = await insertRecord(obj);
    const day = moment(new Date()).format("DD");
    console.log('isPrime(3): ', isPrime(3));
    if (isPrime(3)) {
      const apidata = await axios.get("https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=7b6c6e5dcee14d05ab79fc4f4efef74d");
      console.log('apidata: ', apidata);
      return sendResult(false, apidata, null);
    } else {
      return sendResult(true, null, messages.isNotPrime);
    }
  } catch (error) {
    throw error;
  }  
};

module.exports = {
  insertData,
};
