import "./ActivityTypeFilter.css";

export default function ActivityTypeFilter({ setFilter, filterTypes }) {
  const filters = [...new Set(filterTypes)]

  return (
  <div className='type-filter-container'>
      <div className="type-filter-container__item" onClick={() => setFilter("")}>#all</div>
      {
          filters.map(filterType => {
            return <div className="type-filter-container__item" onClick={() => setFilter(filterType)} key={filterType}>#{filterType}</div>
          })
      }
  </div>
  );
}
