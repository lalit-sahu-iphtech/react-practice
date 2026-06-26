export default function Closure(){
  //the access of inner fxn to outer function

  function outer(){
    let a = 5;

    function inner(){
        let b = 10;
        console.log(a + b);
    }
    return inner;
  }
  console.log(inner());
}