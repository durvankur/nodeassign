
const query = require("../database");

const insertRecord = async(obj) => {
  try {
    let stmt = `insert into demo (insertdate) values(${obj.insertdate})`;
    const result = await query(stmt);
    return await result;
  } catch (error) {
    throw error;
  } 
};

module.exports = {
  insertRecord,
};
