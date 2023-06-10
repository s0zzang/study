// class 
// 객체의 모양과 동작을 미리 정해놓은 템플릿
// {
//     a: 1, 
//     b: [1,2,4,5],
//     c: function abs (){}
// }

// 클래스 정의 & 상속자 및 메서드 
class ClassName{ // 틀이기 때문에 매개변수 없음, 실행문만
    // 생성자
    constructor() {}
    // 메서드 (객체에 해당하는 함수)
    mothod1() {}
    mothod2() {}
}


class Breed {
    constructor () {
        this.kind = '푸들'
    }
    printKind() {
        console.log('🐶', this.kind)
    }
}
class Dog extends Breed { // extends Breed : 클래스 상속 
    // 생성자
    constructor() {
        super(); // Breed 내 생성자 모두 가져오기
        this.name = '짜장';
    }
    // 메서드
    method() {
        console.log('🐶', this.name)
    }
}

const dog = new Dog(); // 클래스 인스턴스 : new 클래스이름() 
// 일을 시킬 땐 메서드를 
dog.method();
dog.printKind();