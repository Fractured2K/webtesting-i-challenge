const { succeed, fail, repair, get } = require('./enhancer.js');

describe('Enhancer tests', () => {
	// Enhancer succeed method tests
	test('accepts item (object) and returns new item (object). if enhancement level is less than 20 go up by one if not stay the same', () => {
		// check to see if item enhancement level goes up by 1
		expect(
			succeed({ name: 'Staff', enhancement: 6, durabilty: 20 })
		).toEqual({
			name: 'Staff',
			enhancement: 7,
			durabilty: 20
		});

		// check to see if item enhancement level stays at 20
		expect(
			succeed({ name: 'Staff', enhancement: 20, durabilty: 20 })
		).toEqual({
			name: 'Staff',
			enhancement: 20,
			durabilty: 20
		});
	});

	// Enhancer fail method tests
	test('accepts item (obect) and returns new item (object) based on rules defined by the client.', () => {
		// If the item's enhancement is less than 15, the durability of the item is decreased by 5
		expect(
			succeed({ name: 'Staff', enhancement: 14, durabilty: 20 })
		).toEqual({
			name: 'Staff',
			enhancement: 14,
			durabilty: 15
		});
	});

	// Enhancer repair method tests
	test('accepts item (obect) and returns new item (object) with the durability restored to 100', () => {
		expect(
			repair({ name: 'Staff', enhancement: 6, durabilty: 20 })
		).toEqual({
			name: 'Staff',
			enhancement: 6,
			durabilty: 100
		});
	});
});
