import './App.css'
import ConditionalStyling from './components/ConditionalStyling'

function App() {

  return (
    <> 
      <div className='inner-container'>
        <ConditionalStyling />
      </div>  
      <div className='inner-container'>
        <ConditionalStyling />
      </div>  
    </>
  )
}

export default App
