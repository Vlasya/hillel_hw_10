// Создать функцию-конструктор SuperMath. Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak.
// Пример обекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %. При вводе znak нужно сделать проверку корректности ввода на возможные математические действия.
// Метод check должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. Если - да, сделать математическое действие znak(которое описано в прототипе), иначе - запросить ввод новых данных через метод input() с прототипа функции-конструктор SuperMath.
// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> считает





function superMath(x,y,znak){
	this.x=x;
	this.y=y;
	this.znak=znak
}

superMath.prototype.count=function(){
	if(this.znak==='+') return this.x+this.y;
	if(this.znak==='-') return this.x-this.y;
	if(this.znak==='*') return this.x*this.y;
	if(this.znak==='/') return this.x/this.y;
	if(this.znak==='%') return this.x%this.y;
}

superMath.prototype.input=function(){
	do {this.x=+prompt('Введите первое число')
		} while(isNaN(this.x));
	do {this.y=+prompt('Введите второе число')
		} while(isNaN(this.y));
	do {this.znak=prompt('Введите действие, выбрать из + -/  * % ')
		}while( this.znak!=='+'&&this.znak!=='-'&&this.znak!=='/'&&this.znak!=='*'&&this.znak!=='%')


}

superMath.prototype.check=function(){
	let resultInput,fresultAfterCount

	let answer = confirm(` Вы хотите произвести математическое действие?`)
		 if(answer) {
			  return this.count()
		 } else {
			resultInput= this.input()
			fresultAfterCount=this.count()
		 }
		 return fresultAfterCount
	
}

let num=new superMath(2,3,'+')
