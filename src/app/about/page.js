import React from 'react'
import Herosection from '../component/Herosection'
import sticker from '../../../public/sticker.png'

function page() {
  return (
    <div>
        {/* <h1>Hello kunal singh about us page</h1> */}
        <Herosection title={"Our Story"} imgUrl={sticker}/>
    </div>
  )
}

export default page