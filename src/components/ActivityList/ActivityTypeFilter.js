import "./ActivityTypeFilter.css";

export default function ActivityTypeFilter({ setFilter }) {
  const filterTypes = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];

  return (
  <div className='type-filter-container'>
      <div className="type-filter-container__item" onClick={() => setFilter("")}>#all</div>
      {
          filterTypes.map(filterType => {
            return <div className="type-filter-container__item" onClick={() => setFilter(filterType)} key={filterType}>#{filterType}</div>
          })
      }
  </div>
  );
}
