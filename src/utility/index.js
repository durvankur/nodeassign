const { moment } = require("./librarydata");
require("dotenv").config();

const sendResponse = (response, result) => {
	if (result.iserror) {
		return response.status(500).json({
			error: {
				msg: result.msg,
			},
			result: null,
		});
	} else {
		return response.status(200).json({
			error: null,
			result: [
					{
							data: result.result,
					}
			]
		});
	}
};

const sendError = (response, msg) => {
	const data = {
		msg,
	};
	return response.status(500).json({ error: data, result: null });
}

const sendResult = (error, result, msg) => {
	return {
		iserror: error,
		result,
		msg,
	};
}


module.exports = {
	sendResponse,
	sendError,
	sendResult,
}