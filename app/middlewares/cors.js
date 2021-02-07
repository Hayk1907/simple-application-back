module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  res.header('Access-Control-Expose-Headers', 'X-Auth-Token, X-Auth-DeviceId');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Origin', req.get('origin'));
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With, X-Auth-Token, X-Auth-DeviceId'
  );
  next();
};
