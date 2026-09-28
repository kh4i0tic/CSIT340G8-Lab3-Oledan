const Header = (props) => {
  console.log(props)
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

  const course1 = {
    subject: 'CSIT321 - Applications Development and Emerging Technologies',
    units: 3
  }
  const course2 = {
    subject: 'CSIT327 - Information Management 2',
    units: 3
  }
  const course3 = {
    subject: 'IT317 - Project Management for IT',
    units: 3
  }

  const myName = "Jillian Britney Q. Oledan"
  const mySection = "G8"

  return (
    <div>
      <Header course={courseName} />
      <Content 
          subject1={course1.subject} units1={course1.units}
          subject2={course2.subject} units2={course2.units} 
          subject3={course3.subject} units3={course3.units} 
      />
      <Total totalUnits={course1.units + course2.units + course3.units} />
      <Footer name={myName} section={mySection} />
    </div>
  )
}

export default App