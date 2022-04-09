require('dotenv').config()
const { app } = require('./configureExpress');

const PORT = process.env.PORT || 4000;

async function main() {
  app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
  })
}

main();