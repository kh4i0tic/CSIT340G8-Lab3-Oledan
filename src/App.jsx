const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} subject={part.subject} units={part.units} />
      ))}
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
  console.log(props)
  return (
    <div>
      <p>Total Units: {props.parts.reduce((sum, part) => sum + part.units, 0)}</p>
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

  const parts = [
    {
      subject: 'CSIT321 - Applications Development and Emerging Technologies',
      units: 3
    },
    {
      subject: 'CSIT327 - Information Management 2',
      units: 3
    },
    {
      subject: 'IT317 - Project Management for IT',
    units: 3
    }
  ]

  const myName = "Jillian Britney Q. Oledan"
  const mySection = "G8"

  return (
    <div>
      <Header course={courseName} />
      <Content parts={parts}/>
      <Total parts={parts} />
      <Footer name={myName} section={mySection} />
    </div>
  )
}

export default App