import React from 'react'
import "./ActivityItem.css"

export default function ActivityItem({activityTitle, activityType, participants,
    price,
    accessibility,
    activityList}) {

    return (
        <div>
            <div className="flip">
    <div className="front">
       <h2 className="text-shadow">{activityTitle}</h2>
       <h4 className="activity-type">#{activityType}</h4>
    </div>
    <div className="back">
       <h3>{activityTitle}</h3>
       <div className="back__spec">
       <p>Participants: {"😀".repeat(participants)}</p>
       <p>Price: {price > 0 ? "🤑".repeat(price*10) : "FREE"}</p>
       <p>Accessibility: <span>{"☠️ ".repeat(accessibility*10)}</span></p>
       </div>
    </div>
</div>
</div>
    )
}
