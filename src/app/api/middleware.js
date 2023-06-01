import bodyParser from 'body-parser';

export const middleware = (handler) => (req, res) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    bodyParser.json()(req, res, () => {
      handler(req, res);
    });
  } else {
    handler(req, res);
  }
};