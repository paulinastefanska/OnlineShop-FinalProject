// get all posts

exports.getProducts = function (req, res) {
  const data = [
    { id: '1adfasf', title: 'Product 1', content: 'Photo 1' },
    { id: '2evxc34', title: 'Product 2', content: 'Photo 2' },
  ]
  res.json(data);
};