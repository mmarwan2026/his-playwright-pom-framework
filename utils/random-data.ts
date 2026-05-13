// Generate random string
export function randomString(len = 5) {
  return Math.random().toString(36).substring(2, 2 + len);
}

// Generate random numeric string
export function randomNumber(len = 6) {
  return Math.floor(Math.random() * Math.pow(10, len)).toString();
}

// Generate random email
export function randomEmail() {
  return `user${Date.now()}@test.com`;
}

// Generate random phone number
export function randomPhone() {
  return `+255${Math.floor(100000000 + Math.random() * 900000000)}`;
}

// Generate random English name
export function randomName() {
  const firstNames = [
    'John',
    'David',
    'Michael',
    'James',
    'Robert',
    'Ali',
    'Mark',
    'Daniel',
    'Chris',
    'Peter',
  ];

  const lastNames = [
    'Smith',
    'Brown',
    'Johnson',
    'Williams',
    'Taylor',
    'Wilson',
    'Anderson',
    'Thomas',
  ];

  // Pick random first name
  const first =
    firstNames[Math.floor(Math.random() * firstNames.length)];

  // Pick random last name
  const last =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  return {
    first,

    // Generate random middle initial
    middle: String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    ),

    last,
  };
}