import './App.css'
import NamePrinter from './mycomponents/NamePrinter'

const person =[
  {
  myName: 'adolphe',
  age: 20
},
{
  myName: 'ngoga',
  age: 25
},
{
  myName: 'prince',
  age: 15
}
] 

function App() {
  return (
    <>
     {person.map((element, index) =>{
      return <NamePrinter key={index} myName={element.myName} age={element.age}/> 
    })}
    </>
  )
}

export default App
