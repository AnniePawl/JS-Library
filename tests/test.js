require('../src/index')

// capitalizeFirst() Test 
test('capitalizeFirst', () => {
  expect('jello'.capitalizeFirst()).toBe('Jello')
  expect('jello earth'.capitalizeFirst()).toBe('Jello earth')
  expect(' jello earth'.capitalizeFirst()).toBe(' jello earth')
})

// capitalizeAll() Test
test('capitalizeAll', () => {
  expect('gingerbread house'.captitalizeAll()).toBe('Gingerbread House')
  expect('gingerbread-house'.captitalizeAll()).toBe('Gingerbread-house')
})

// upperCase() Test
test('upperCase', () => {
  expect('king kong'.upperCase()).toBe('KING KONG')
  expect('king   kong'.upperCase()).toBe('KING   KONG')
  expect('  king kong  '.upperCase()).toBe('  KING KONG  ')
  expect('king-kong'.upperCase()).toBe('KING-KONG')
})

// // removeAllSpaces() Test
test('removeAllSpaces', () => {
  expect('space out'.removeAllSpaces()).toBe('spaceout')
  expect('  space out  '.removeAllSpaces()).toBe('spaceout')
})

// removeEndSpaces() Test
test('removeEndSpaces', () => {
  expect(' derby girl '.removeEndSpaces()).toBe('derby girl')
  expect('   derby girl   '.removeEndSpaces()).toBe('derby girl')
  expect('  derby   girl  '.removeEndSpaces()).toBe('derby   girl')
})

// removeExcessSpaces() Test
test('removeExcessSpaces', () => {
  expect('get   closer'.removeExcessSpaces()).toBe('get closer')
  expect('  get closer  '.removeExcessSpaces()).toBe('get closer')
  expect(' get  closer   to    me  '.removeExcessSpaces()).toBe('get closer to me')
})

// kebabCase() Test
test('kebabCase', () => {
  expect('kit kat bar'.kebabCase()).toBe('kit-kat-bar')
  expect('Kit Kat Bar'.kebabCase()).toBe('kit-kat-bar')
  expect('KIT KAT BAR'.kebabCase()).toBe('kit-kat-bar')
  expect('kit  kat  bar'.kebabCase()).toBe('kit--kat--bar')
  expect('  kit kat bar  '.kebabCase()).toBe('--kit-kat-bar--')
})

// snakeCase() Test
test('snakeCase', () => {
  expect('sneaky slippery snake'.snakeCase()).toBe('sneaky_slippery_snake')
  expect('Sneaky Slippery Snake'.snakeCase()).toBe('sneaky_slippery_snake')
  expect('SNEAKY SLIPPERY SNAKE'.snakeCase()).toBe('sneaky_slippery_snake')
  expect('sneaky  slippery  snake'.snakeCase()).toBe('sneaky__slippery__snake')
  expect(' sneaky slippery snake '.snakeCase()).toBe('_sneaky_slippery_snake_')

})

// camelCase() Test
test('camelCase', () => {
  expect('happy hump day'.camelCase()).toBe('happyHumpDay')
  expect('  happy  hump  day  '.camelCase()).toBe('happyHumpDay')
  expect('Happy Hump Day'.camelCase()).toBe('happyHumpDay')
})