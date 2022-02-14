import "./ActivityTypeFilter.css";
import {useState} from "react";

export default function ActivityTypeFilter({ setFilter, setFilterType, filterType, activities }) {
  const typeFilters = [...new Set(activities?.map(activity => activity.type).sort((a,b) => {return a > b ? 1 : -1}))];
  const participantFilters = [...new Set(activities?.map(activity => activity.participants).sort((a,b) => {return a > b ? 1 : -1}))];
  const priceFilters = [...new Set(activities?.map(activity => activity.price).sort((a,b) => {return a > b ? 1 : -1}))];
  const accessibilityFilters = [...new Set(activities?.map(activity => activity.accessibility).sort((a,b) => {return a > b ? 1 : -1}))];
  
  const [activityFilters, setActivityFilters] = useState(typeFilters);
  const [filterStyle, setFilterStyle] = useState("type-filter");
  

  return (
  <div className='type-filter-container'>
      <div className="type-filter-container__item type-filter" onClick={() => {
        setActivityFilters(typeFilters); 
        setFilterType("type")
        setFilterStyle("type-filter")}}
        >#TYPE</div>
      <div className="type-filter-container__item participants-filter" onClick={() => {
        setActivityFilters(participantFilters); 
        setFilterType("participants")
        setFilterStyle("participants-filter")}}
        >#PARTICIPANTS</div>
      <div className="type-filter-container__item price-filter" onClick={() => {
        setActivityFilters(priceFilters); 
        setFilterType("price")
        setFilterStyle("price-filter")}}
      >#PRICE</div>
      <div className="type-filter-container__item accessibility-filter" onClick={() => {
        setActivityFilters(accessibilityFilters); 
        setFilterType("accessibility")
        setFilterStyle("accessibility-filter")}}
      >#ACCESSIBILITY</div>
      <br />

      <h3 className="filter-type-title">#{filterType.toUpperCase()}</h3>
      {activityFilters.length > 0 && <div className={"type-filter-container__item " + filterStyle} onClick={() => setFilter("")}>#all</div>}
      
      {activityFilters.length > 1 && activityFilters.map(filterType => {
            return <div className={"type-filter-container__item " + filterStyle} onClick={() => setFilter(filterType)} key={filterType}>#{filterType}</div>
          })
      }
  </div>
  );
}
