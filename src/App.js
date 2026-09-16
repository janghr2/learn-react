import Card from "./components/Card"
import Greeting from "./components/Greeting"


function App() {

// logic
// 구조분해할당 - object destructure

const animals = ["dog", "cat", "pig"]
// const second = animals[1]
const [first, second, third, fourth] = animals

console.log("🚀 ~ App ~ first:", first)


console.log("🚀 ~ App ~ second:", second)


// const todoitem = {
//   todo: "react 학습하기"
//   iscomplete: false
// }

// const { todo: iscomplete, "react 학습하기"} = todoitem




//view
  return (
    <div className="App">
      Hello world
      <Greeting />
      {/* <Greeting /> */}

        {/* card 컴포턴트 만들고, 이 자리에 호출  */}
      {/* <Card />
      <Card />
      <Card />
      <Card />
 */}

    </div>    
  )
}


  





export default App;
