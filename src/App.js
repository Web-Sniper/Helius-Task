import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import HierarchicalTree from './components/screens/HierarchicalTree'
import SortByDateTime from './components/screens/SortByDateTime';
import ToDo from './components/screens/ToDo'
import Vehicle from './components/screens/Vehicle';

function App() {
  return (
    <BrowserRouter>
      <Route path="/hierarchical-tree">
        <HierarchicalTree />
      </Route>
      <Route path="/sort-by-datetime">
        <SortByDateTime />
      </Route>

      <Route path="/todo">
        <ToDo />
      </Route>
      <Route path="/vehicle">
        <Vehicle />
      </Route>
    </BrowserRouter>
  );
}

export default App;
