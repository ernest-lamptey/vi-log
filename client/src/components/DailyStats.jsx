import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import SignedInVisitors from "./SignedInVisitors";
import DailyVisits from "./DailyVisits";

const DailyStats = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <div>
            <button onClick={handlePrint}>Export PDF</button>
            <div ref={componentRef} className='dailyStats'>
                <SignedInVisitors />
                <DailyVisits />
            </div>
        </div>
    )
}

export default DailyStats