window.onload=function(){
  // 构造器模式

  // const liLei={
  //   name:'李雷',
  //   age:25,
  //   career: 'coder'
  // }
  // const hanMeiMei = {
  //   name: '韩梅梅',
  //   age: 24,
  //   career: 'product manager'
  // }

  // function User(name,age,career){
  //   this.name=name;
  //   this.age=age;
  //   this.career=career;
  // }
  // const liLei=new User('李雷',25,'coder');
  // console.log(liLei.name)

  // 简单工厂模式
  // function Coder(name , age) {
  //   this.name = name
  //   this.age = age
  //   this.career = 'coder' 
  //   this.work = ['写代码','写系分', '修Bug']
  // }
  // function ProductManager(name, age) {
  //     this.name = name 
  //     this.age = age
  //     this.career = 'product manager'
  //     this.work = ['订会议室', '写PRD', '催更']
  // }
  // function Factory(name, age, career) {
  //   switch(career) {
  //       case 'coder':
  //           return new Coder(name, age) 
  //           break
  //       case 'product manager':
  //           return new ProductManager(name, age)
  //           break
  //   }
  // }
  // const liLei=Factory('李雷', 25, 'coder');
  // console.log(liLei.work)

  function User(name , age, career, work) {
    this.name = name
    this.age = age
    this.career = career 
    this.work = work
  }
  function Factory(name, age, career) {
    let work
    switch(career) {
        case 'coder':
            work =  ['写代码','写系分', '修Bug'] 
            break
        case 'product manager':
            work = ['订会议室', '写PRD', '催更']
            break
        case 'boss':
            work = ['喝茶', '看报', '见客户']
            break
    }
            
    return new User(name, age, career, work)
  }
  const liLei=Factory('李雷', 25, 'boss');
  console.log(liLei.work)
}