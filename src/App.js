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


const handleButtonClick =() =>{
  console.log("click!!")
}

//view
  return (
    <div className="App">
      Hello world
      <Greeting />
      <Greeting />

        {/* card 컴포턴트 만들고, 이 자리에 호출  */}
      <Card 
        imgUrl="https://imgnews.pstatic.net/image/144/2026/09/16/0001138537_001_20260916131310026.jpg?type=w647" itemName="엄지성 해트트릭"
        onButtonClick={handleButtonClick } 

      />
      <Card 
        imgUrl="https://imgnews.pstatic.net/image/144/2026/09/16/0001138537_002_20260916131310210.jpg?type=w647" itemName="아시안게임 대표팀"
        onButtonClick={handleButtonClick} 
/>

 
      <Card 
        imgUrl="https://imgnews.pstatic.net/image/144/2026/09/16/0001138537_003_20260916131310301.jpg?type=w647" itemName="아시안게임대표팀2"
        onButtonClick={handleButtonClick} 

      />


    </div>    
  )
}


  





export default App;
