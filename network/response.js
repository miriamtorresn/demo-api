exports.success = (request, response, body, status = 200) => {
  response.status(status).send({
    error: false,
    status,
    body,
  });
};

exports.error = (request, response, body, status = 500) => {
  response.status(status).send({
    error: true,
    status,
    body,
  });
};
