function sendResponse(res, statusCode, data) {
    res.status(statusCode).json(data);
}
function sendError(res, statusCode, data) {
    res.status(statusCode).send(data);
}
function internalError(res) {
    res.status(404).send("Internal Server Error");
}
  
module.exports ={
    sendResponse,sendError,internalError
};