import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Dashboard from '../pages/Dashboard';
import Login from '../components/Auth/Login';
import SignUp from '../components/Auth/SignUp';
import Profile from '../components/Profile/Profile';
import RecordActivity from '../components/Activity/RecordActivity';
import ActivityList from '../components/Activity/ActivityList';
import Feed from '../components/Feed/Feed';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/record-activity" element={<RecordActivity />} />
      <Route path="/activities" element={<ActivityList />} />
      <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App
