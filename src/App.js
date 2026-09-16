import Greeting from "./Greeting"

function App() {

// logic
// 구조분해할당 - object destructure

const animals = ["dog", "cat", "pig"]
// const second = animals[1]
const [first, second, third, forth] = animals

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
      
    </div>    
  )
}


  





export default App;
