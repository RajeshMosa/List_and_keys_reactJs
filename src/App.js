import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imgurl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Rajesh',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imgurl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Amelia',
    role: 'Java Developer',
  },
  {
    uniqueNo: 3,
    imgurl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Sophia',
    role: 'Python Developer',
  },
  {
    uniqueNo: 4,
    imgurl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Sandeep',
    role: 'Full stack Web Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title"> User Details</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
