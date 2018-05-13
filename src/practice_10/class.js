class Class {
    constructor(number) {
        this.number = number;
        this.leader;
    }
    getDisplayName() {
        return "Class " + this.number;
    }
    assignLeader(student) {
        if (student.klass.number == this.number)
            this.leader = student;
        else {
            console.log('It is not one of us.')
        }
    }
    appendMember(student){
        student.klass = this;
    }
    isIn(student){
        return student.klass.number == this.number?true:false;
    }
}

module.exports = Class;

