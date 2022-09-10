import React from 'react'
import SignedInVisitors from "./SignedInVisitors";
import DailyVisits from "./DailyVisits";

const DailyStats = () => {
  return (
    <div className='dailyStats'>
        <SignedInVisitors />
        <DailyVisits />
    </div>
  )
}

export default DailyStats