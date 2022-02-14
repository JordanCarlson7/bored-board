import React from 'react';

const DataContext = React.createContext({
    activities: [],
    totalAmount: 0,
    addItem:(item) => {},
    removeItem: (id) => {}
});
export default DataContext;