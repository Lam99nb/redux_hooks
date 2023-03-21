import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import HobbyList from '../component/home/hobbyList/HobbyList';
import casual from 'casual-browserify';
import { addNewHobby, setActiveHobby } from '../actions/hobby'
import './homepage.css'

function Homepage(props) {

  const hobbyList = useSelector(state => state.hobby.lists);
  const activeId = useSelector(state => state.hobby.activeId);

  console.log("hobby list", hobbyList);

  const dispatch = useDispatch();

  const handleAddNewHobby = () => {
    const newHobby = {
      id: casual.uuid,
      title: casual.title,

    }

    // Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
    console.log("hobby list new", hobbyList);

  }
  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  }
  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={handleAddNewHobby}>ADD HOBBY</button>
      <ul className='hobby-list'>
        {hobbyList.map((hobby) => (
          <li key={hobby.id} onClick={() => handleHobbyClick(hobby)} className={hobby.id === activeId ? 'active' : ''}>{hobby.title}</li>
        ))}

      </ul>

    </div>
  )
}

export default Homepage