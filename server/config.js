module.exports = {
  PORT: process.env.PORT || 8000,
  DB: process.env.DB ? process.env.DB : 'mongodb+srv://TechStore:TechStore79@cluster0-nq6zb.mongodb.net/test?retryWrites=true&w=majority',
};