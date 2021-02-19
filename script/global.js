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

  // function User(name , age, career, work) {
  //   this.name = name
  //   this.age = age
  //   this.career = career 
  //   this.work = work
  // }
  // function Factory(name, age, career) {
  //   let work
  //   switch(career) {
  //       case 'coder':
  //           work =  ['写代码','写系分', '修Bug'] 
  //           break
  //       case 'product manager':
  //           work = ['订会议室', '写PRD', '催更']
  //           break
  //       case 'boss':
  //           work = ['喝茶', '看报', '见客户']
  //           break
  //   }
            
  //   return new User(name, age, career, work)
  // }
  // const liLei=Factory('李雷', 25, 'boss');
  // console.log(liLei.work)

  //抽象工厂模式
  class MobilePhoneFactory {
    // 提供操作系统的接口
    createOS(){
        throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
    }
    // 提供硬件的接口
    createHardWare(){
        throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
    }
  }

  // 具体工厂继承自抽象工厂
  class FakeStarFactory extends MobilePhoneFactory {
    createOS() {
        // 提供安卓系统实例
        return new AndroidOS()
    }
    createHardWare() {
        // 提供高通硬件实例
        return new QualcommHardWare()
    }
  }

  // 定义操作系统这类产品的抽象产品类
  class OS {
    controlHardWare() {
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
    }
  }

  // 定义具体操作系统的具体产品类
  class AndroidOS extends OS {
    controlHardWare() {
        console.log('我会用安卓的方式去操作硬件')
    }
  }

  class AppleOS extends OS {
    controlHardWare() {
        console.log('我会用🍎的方式去操作硬件')
    }
  }

  // 定义手机硬件这类产品的抽象产品类
  class HardWare {
    // 手机硬件的共性方法，这里提取了“根据命令运转”这个共性
    operateByOrder() {
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
    }
  }

  // 定义具体硬件的具体产品类
  class QualcommHardWare extends HardWare {
    operateByOrder() {
        console.log('我会用高通的方式去运转')
    }
  }

  class MiWare extends HardWare {
    operateByOrder() {
        console.log('我会用小米的方式去运转')
    }
  }

  // 这是我的手机
  const myPhone = new FakeStarFactory()
  // 让它拥有操作系统
  const myOS = myPhone.createOS()
  // 让它拥有硬件
  const myHardWare = myPhone.createHardWare()
  // 启动操作系统(输出‘我会用安卓的方式去操作硬件’)
  myOS.controlHardWare()
  // 唤醒硬件(输出‘我会用高通的方式去运转’)
  myHardWare.operateByOrder()
}