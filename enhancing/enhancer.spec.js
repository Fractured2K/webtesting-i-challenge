const { succeed, fail, repair, get } = require('./enhancer.js');

describe('Enhancer succeed method tests', () => {
	test('If the items enhancement level is less than 20 go up by one if not stay the same', () => {
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
});

describe('Enhancer fail method tests', () => {
	test('If the items enhancement level is less than 15, the durability of the item is decreased by 5.', () => {
		// If the items enhancement is less than 15, the durability of the item is decreased by 5
		expect(fail({ name: 'Staff', enhancement: 14, durabilty: 20 })).toEqual(
			{
				name: 'Staff',
				enhancement: 14,
				durabilty: 15
			}
		);
	});

	test('If the items enhancement level is 15 or more, the durability of the item is decreased by 10.', () => {
		// If the items enhancement is 15 or more, the durability of the item is decreased by 10.
		expect(fail({ name: 'Staff', enhancement: 15, durabilty: 20 })).toEqual(
			{
				name: 'Staff',
				enhancement: 15,
				durabilty: 10
			}
		);
	});

	test('If the items enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).', () => {
		// If the items enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
		expect(fail({ name: 'Staff', enhancement: 18, durabilty: 20 })).toEqual(
			{
				name: 'Staff',
				enhancement: 17,
				durabilty: 20
			}
		);
	});
});

describe('Enhancer repair method tests', () => {
	test('Accepts item (obect) and returns new item (object) with the durability restored to 100', () => {
		expect(
			repair({ name: 'Staff', enhancement: 6, durabilty: 20 })
		).toEqual({
			name: 'Staff',
			enhancement: 6,
			durabilty: 100
		});
	});
});
