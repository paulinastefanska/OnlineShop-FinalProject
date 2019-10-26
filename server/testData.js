const Product = require('./models/product.model');

const loadTestData = async () => {

  const data = [
    {
      id: '1234a',
      img: { src: '/images/01.png'},
      name: 'GoPro Hero 7 Black',
      price: '$359.99',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
    {
      id: '2234a',
      img: { src: '/images/02.png'},
      name: 'GoPro Hero 7 Black Limited Edition',
      price: '$389.99',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
    {
      id: '3234a',
      img: { src: '/images/03.png'},
      name: 'Apple iMac 27" Retina',
      price: '$1729.00',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
    {
      id: '4234a',
      img: { src: '/images/04.png'},
      name: 'Apple iPhone 11 Pro Max 64GB',
      price: '$1099.99',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
    {
      id: '5234a',
      img: { src: '/images/05.png'},
      name: 'DJI Mavic 2 Pro Combo',
      price: '$1729.00',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
    {
      id: '6234a',
      img: { src: '/images/06.png'},
      name: 'DJI Phantom 4 Pro',
      price: '$1765.00',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
  ];

  try {
    let counter = await Product.countDocuments();
    if(counter === 0) {
      console.log('No products. Loading data...');
      await Product.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log('Couldn\'t load test data', err);
  }

};

module.exports = loadTestData;