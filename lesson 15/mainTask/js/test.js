describe("Сумма чисел больше 10", function(){
	it("Возвращает ли функция логическое значение?", function(){
		assert.typeOf(sum(), 'boolean');
	});
});

describe("Число num", function(){
	it("num равен 5", function(){
		assert.equal(num, 5);
	});
});

describe("Функция Each", function(){
	it("Возвращает ли функция массив?", function(){
		assert.typeOf(each(a, myFunc), 'Array');
	});
	it("Длина массива", function(){
		assert.equal(each(a, myFunc).length, 5);
	});
});