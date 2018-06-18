describe('String', function () {
	
    describe('Методы', function () {
		
		describe('Метод length', function () {
        	it('символ \n считаеться за букву', function () {
        		var str = "Dzmitry\n",
            	strTwo = "Dzmitry";
            	expect(str.length).toBe(8);
            	expect(strTwo.length).toBe(7);
        	});
    	}); 

    	describe('Доступ к символам', function () {
        	it('Метод charAt()', function () {
        		var str = "Dzmitry",
				strTwo = '';
            	expect(str.charAt(0)).toBe('D');
            	expect(str.charAt(0)).not.toBe(undefined);
            	expect(strTwo.charAt(0)).toBe('');
            	expect(strTwo[0] === undefined).toBeTruthy();;
        	});

        	it('Доступ к символу через []', function () {
        		var str = "Dzmitry",
				strTwo = '';
            	expect(strTwo[0] === undefined).toBeTruthy();
            	str = str[3] + str[4] + str[5];
            	expect(str).toBe('itr');
        	});

    	});       

    	describe('Смена регистра', function () {
    		it('Изменение строки', function () {
    			var str = "Dzmitry";
    			expect(str.toUpperCase()).toBe('DZMITRY');
    			expect(str.toLowerCase()).toBe('dzmitry');
            	expect(str.toUpperCase()).not.toBe('Dzmitry');
            	
        	});
    	}); 

    	describe('Поиск совпадений', function () {
    		it('Метод indexOf', function () {
    			var str = "We are learning js";
    			expect(str.indexOf("js")).toBe(16);
    			expect(str.indexOf("We")).toBe(0);
    			expect(str.indexOf("we")).toBe(-1);
    			expect(str.indexOf("e", 2)).toBe(5);
    			expect(str.indexOf("are") === 3).toBe(true);
        	});

        	it('Метод localeCompare()', function () {
    			var str = "We are learning js";
    			expect(str.localeCompare("www")).toBe(-1);
    			expect(str.localeCompare("This")).toBe(1);     			
        	});
    	});

    	describe('Методы для работы с подстрокой', function () {
    		it('Метод substring()', function () {
    			var str = "Dzmitry";
    			expect(str.substr(0,1)).toBe('D'); 
    			expect(str.substr(1)).toBe('zmitry');  
    			expect(str.substr(2,4)).toBe('mitr'); 
    			expect(str.substr(4,-1)).toBe('');    		
        	});

        	it('Метод slice()', function () {
    			var str = "Dzmitry";
    			expect(str.slice(0,1)).toBe('D');  
    			expect(str.slice(1)).toBe('zmitry');  
    			expect(str.slice(2,4)).toBe('mi');  
    			expect(str.slice(4, -1)).toBe('tr');     		
        	});

        	it('Метод substring()', function () {
    			var str = "Dzmitry";
    			expect(str.substring(0,1)).toBe('D');
    			expect(str.substring(1)).toBe('zmitry');
    			expect(str.substring(2,4)).toBe('mi'); 
    			expect(str.substring(4, -1)).toBe('Dzmi');       		
        	});
    	});

    	it('Метод charCodeAt()', function () {
    		var str = "Dzmitry";
    		expect(str.charCodeAt(0) === 68).toBeTruthy();;     		
        });

    });

    describe('Кодировка', function () {
        it('Сравнения строк по символам', function () {
        	 expect('а' > 'Я').toBe(true);
            expect("Дима" > "Денис").toBe(true);
            expect("3" > "16").toBe(true);
            expect(2 > "16").toBe(false);
        });

    });

    describe('Сравнения', function () {        
        it('Сравнения методов', function () {
        	var str = "Dzmitry";         	
        	expect(str.substring(0,1)).toBe(str.slice(0,1));
           	expect(str.substring(0,1)).toBe(str.substr(0,1));
           	expect("I'm a JavaScript programmer").not.toBe("I'm a JavaScript \n programmer")
           	expect(str.toUpperCase()).not.toEqual(str.toLowerCase());
        });

    });
});
