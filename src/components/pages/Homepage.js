import '../../App.css';
import React, {useState, useEffect} from 'react';

import ChallengeList from '../ChallengeList';
import Features from '../Features';
import Home from '../Home';
import Search from '../Search';
import Empty from '../Empty';
import { Data } from '../../data';



function Homepage() {

  const [list, setList] = useState(Data);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const [levels, setlevels] = useState([
    { id: 1, checked: false, label: 'Easy' },
    { id: 2, checked: false, label: 'Medium' },
    { id: 3, checked: false, label: 'Hard' },
  ]);

  const [statuses, setStatuses] = useState([
    { id: 1, checked: false, label: 'Upcoming' },
    { id: 2, checked: false, label: 'Active' },
    { id: 3, checked: false, label: 'Past' },
  ]) ;

  const handleChangeChecked = (id) => {
    const levelsStateList = levels;
    const changeCheckedlevels = levelsStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setlevels(changeCheckedlevels);
    console.log(changeCheckedlevels)
  };
  const handleStatusChecked = (id) => {
    const statusesStateList = statuses;
    const statCheckedstatuses = statusesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setStatuses(statCheckedstatuses);
    console.log(statCheckedstatuses)
  };

  const applyFilters = () => {
    let updatedList = Data;

    // level Filter
    const levelsChecked = levels
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (levelsChecked.length) {
      updatedList = updatedList.filter((item) =>
        levelsChecked.includes(item.level)
      );
      }

    //  status Filter
     const statusesChecked = statuses
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (statusesChecked.length) {
      updatedList = updatedList.filter((item) =>
        statusesChecked.includes(item.status)
      );
    }

    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }
    

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [levels, searchInput, statuses]);

  return (
  <>
    <Home/>
    <Features/>
    <Search 
      levels={levels}
      changeChecked={handleChangeChecked}
      value={searchInput}
      changeInput={(e) => setSearchInput(e.target.value)}
      statuses={statuses}
      statChecked={handleStatusChecked}
    />
    
    {resultsFound ? <ChallengeList list={list} /> : <Empty />}
  </>
  );
}



export default Homepage;
