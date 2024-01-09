import './App.css'
import AthleteActivitiesList from './components/AthleteActivitiesList'
function App() {
  return (
    <>
      <h1>Vent.run Test</h1>

      <AthleteActivitiesList />

      <h3>## Authorization strava</h3>
      <a href='https://www.strava.com/oauth/authorize?client_id=119536&redirect_uri=https://localhost:5173&response_type=code&scope=read_all,activity:read_all,activity:write'>
        Connect
      </a>
    </>
  )
}

export default App
