const script = require('../js/script.js');

describe("Сумма чисел больше 10", () => {
	it("Возвращает ли функция логическое значение?", ()=> {
		const { sum: sum } = script;

		expect(typeOf(sum())).toBe('boolean');
	});
});