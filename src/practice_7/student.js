import Person from"./person.js";
module.exports =class Student extends Person
{
    constructor(name,age,klass)
{  
    super(name,age);
    super.introduce();
    this.klass=klass;}
  introduce()
    {return super.introduce()+' I am a Student. I am at Class '+this.klass.number+'.';};
} 