const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part subject={props.subject1} units={props.units1} />
      <Part subject={props.subject2} units={props.units2} />
      <Part subject={props.subject3} units={props.units3} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.subject}: {props.units} units</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total Units: {props.totalUnits}</p>
    </div>
  )
}

const Footer = (props) => {
  return (
    <div>
      <p>{props.name} - CSIT340 - {props.section}</p>
    </div>
  )
}

const App = () => {
  const courseName = 'CSIT340 - Industry Elective 1'
  
  const course1 = 'CSIT321 - Applications Development and Emerging Technologies'
  const units1 = 3
  const course2 = 'CSIT327 - Information Management 2'
  const units2 = 3
  const course3 = 'IT317 - Project Management for IT'
  const units3 = 3

  const myName = "Jillian Britney Q. Oledan"
  const mySection = "G8"

  return (
    <div>
      <Header course={courseName} />
      <Content 
          subject1={course1} units1={units1} 
          subject2={course2} units2={units2} 
          subject3={course3} units3={units3} 
      />
      <Total totalUnits={units1 + units2 + units3} />
      <Footer name={myName} section={mySection} />
    </div>
  )
}

export default App