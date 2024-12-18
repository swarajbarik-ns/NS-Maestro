const { exec } = require("child_process");
const { faker } = require("@faker-js/faker");

// Generate random data
const randomData = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(10, false, /[A-Za-z0-9]/),
};

console.log("Generated Random Data:", randomData);

// Command to run the Maestro test with dynamic parameters
//const command = `FIRST_NAME="${randomData.firstName}" LAST_NAME="${randomData.lastName}" EMAIL="${randomData.email}" PASSWORD="${randomData.password}" maestro --host 192.168.29.127 test ResgistrationFlow.yaml`;
const command = `maestro --host 192.168.29.127 test IHaveCGM.yaml --env FIRST_NAME="${randomData.firstName}" --env LAST_NAME="${randomData.lastName}" --env EMAIL="${randomData.email}" --env PASSWORD="${randomData.password}"`;

// Execute the Maestro command
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Stdout:\n${stdout}`);
});
