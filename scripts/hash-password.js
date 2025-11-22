const bcrypt = require('bcryptjs');

async function hashPassword() {
  const password = '170517Bh.';
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  console.log('Hashed password:', hashed);
}

hashPassword();
