import React from 'react'
import Button from './Components/Button/Button'
import Para from './Components/Paragraph/Para'
import Form from './Components/Form/Form'
import { Data } from './Data'
import './App.css'
import Card from './Components/Card/Card'

const App = () => {

  return (
    <div>
      <h1 className='st-hG'>NEWS APP</h1>
      <div className="mainCont">
      {
        Data.map((e, i) => {
          console.log(e);

          return (

              <Card key={i} Image={e.Image} Heading={e.Heading} Para={e.Para} />
            )
            
          })
        }
        </div>

      {/* <Para stdPara="the process by which one identifies oneself to a computer, and typically comprising the entry of a user identification (user ID) name and password." />
      <Button stdButton="Login" />

    

      <Para stdPara="Author Anne Gere explains that feedback means showing other people our writing and thinking about what we can learn from their comments" />
      <Button stdButton="FeedBack" />

      <Para stdPara='It clearly and specifically states the topic or question that you will address in your essay.' />
      <Button stdButton="Enter" />

      <Para stdPara=' Letting go can create space for new relationships and experiences that may be more fulfilling or aligned with one' />
      <Button stdButton="Lets Go" /> */}
    </div>
  )
}

export default App