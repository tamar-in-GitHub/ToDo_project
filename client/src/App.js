import logo from './logo.svg';
import './App.css';
import Register from './components/register';
import Login from './components/login';
import store from './redux/store';
import { Provider } from 'react-redux';
import Tasks from './redux/reducers/tasks';
import Image from './components/image';
// import Router from "react-router-dom"
import TaskList from './components/taskList';
import AddTask from './components/addTask';
import Task from "./components/task"
import ShowTaskList from "./components/taskUpdate";
// import * as React from 'react';
// import HomeIcon from '@mui/material/HomeIcon';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import{
  BrowserRouter as Router,
Switch,
Routes,
Route,
Link
}from "react-router-dom"

function App() {
  return (
  <Provider store={store}>
    <div className="App">
{/* <Link>
<HomeIcon fontSize="small" />
<HomeIcon />
<HomeIcon fontSize="large" />
<HomeIcon sx={{ fontSize: 40 }} />
</Link> */}

<Routes>
<Route path="/" element={<Login /> }/>
<Route path="/register" element={<Register /> }/>
<Route path="/taskList" element={<TaskList /> }/>
<Route path="/task" element={<Task /> }/>
{/* <Route path="/task" element={<ShowTaskList /> }/> */}
<Route path="/addTask" element={<AddTask /> }/>
<Route path="/image" element={<Image /> }/>
</Routes>




     {/* <Router>
   <div>
      <Register />
      <Switch>
         <Route path='/register'>
          <Register />
        </Route>
        <Route path='/taskList'>
          <TaskList />
        </Route>
        <Route path='/addTask'>
          <AddTask />
        </Route>
        <Route path='/image'>
          <Images />
        </Route>
        <Route path='/task'>
          <Task />
        </Route>
        <Route path='/login'>
          <Login />
        </Route> 
      </Switch>
      </div>
        </Router>        */}
    </div>
    </Provider>
  );
}

export default App;
