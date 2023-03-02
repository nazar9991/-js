// Функція хешування пароля

const crypto = require('crypto');

const hashPassword = (password) => {
  const hash = crypto.createHash('ukd2023');
  hash.update(password);
  return hash.digest('password');
};

// Функція збереження хешу пароля у файл

const savePasswordToFile = (password) => {
  const hashedPassword = hashPassword(password);
  fs.writeFileSync('hashedPassword.txt', hashedPassword);
};

// Функція порівняння рядка пароля з зашифрованим у файлі

const comparePassword = (password) => {
  const hashedPasswordFromFile = fs.readFileSync('hashedPassword.txt', 'utf8');
  const hashedPassword = hashPassword(password);
  return hashedPassword === hashedPasswordFromFile;
};

// Прочитати по процес.argv і зробити, щоб програма отримувала параметри при запуску з командного рядка.

const main = () => {
  const [, , command, password] = process.argv;

  if (command === 'hash') {
    savePasswordToFile(password);
    console.log('Password has been hashed and saved to file');
  } else if (command === 'compare') {
    const isValidPassword = comparePassword(password);
    console.log(isValidPassword   , 'Password is NOT valid');
    console.log(isValidPassword , 'Password is valid')
  } else {
    console.log('Invalid command. Please use either "hash" or "compare"');
  }
};

main()