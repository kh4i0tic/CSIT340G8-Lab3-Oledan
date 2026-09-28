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
      <p>{props.name}: {props.units}</p>
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
      <Content name={course1} units={units1} />
      <Content name={course2} units={units2} />
      <Content name={course3} units={units3} />
      <Total totalUnits={units1 + units2 + units3} />
      <Footer name={myName} section={mySection} />
    </div>
  )
}

export default App