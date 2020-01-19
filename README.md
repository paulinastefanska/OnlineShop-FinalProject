# OnlineShop-FinalProject 
### See [DEMO](https://techstore-5850f.firebaseapp.com/) on Firebase,
#### or on Heroku [DEMO](https://techstore-onlineshop.herokuapp.com).

### TechStore App
Final individual project for the end of Web Developer Bootcamp. 

App was created with `create-react-app` for education purposes. 

The application is adapted to `PWA` (Progressive Web App) you can install the app on your device directly from your browser.

Front-end files are in `client/src` folder.

Back-end is located in `server`. 

Products data are in MongoDB Altas CLuster, but you can also see it in `server/testData.js`.
### Tech stack MERN
* Mongo.db(Mongoose), 
* Express.js, 
* React.js(Redux, React Bootstrap), 
* Node.js.

### The application offers basic functionalities
- displaying list of products (including pagination),
- using discount code in cart,
- sorting products,
- displaying a single product,
- adding and deleting products to cart,
- changing quantity of products in cart,
- calculating price,
- ordering summary.

### Available scripts
#### To run the app locally:

Clone project and use command:
```bash
yarn install
```
To run app type command and use `port:8000`
```bash
yarn start
```
Production build of app:
```bash
yarn build
```
