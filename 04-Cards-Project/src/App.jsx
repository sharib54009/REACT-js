import React from 'react'
import Card from './Components/cards'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.uBYsSL7JDekYP3VpxWZvYQHaHa?pid=Api&P=0&h=180",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.3ZAZvzn_3ypWLvFrRYN5iAHaHa?pid=Api&P=0&h=180",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?pid=Api&P=0&h=180",
    companyName: "Amazon",
    datePosted: "10 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.ckiSkg-SOfotkH8ii2Q82gHaEB?pid=Api&P=0&h=180",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.-M_GY7Ris6IBZ7dDqjvAWQHaHa?pid=Api&P=0&h=180",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.kTRrZDpQTKFMHKx5g1SMugHaHa?pid=Api&P=0&h=180",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP._GO8Ugk1VkV3yR_M7V1jBgHaHa?pid=Api&P=0&h=180",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.Gh8k1gS5C-mc1W9h1Z3LSQHaEK?pid=Api&P=0&h=180",
    companyName: "Tesla",
    datePosted: "8 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.tBxqXYGufdbsXBFIzBRm-wHaHa?pid=Api&P=0&h=180",
    companyName: "Adobe",
    datePosted: "12 days ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.H_EVhisusZRG072gouvMywHaHa?pid=Api&P=0&h=180",
    companyName: "Uber",
    datePosted: "9 weeks ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Delhi, India"
  }
];

  return (
    <div className= "parent">
      {jobOpenings.map(function(elem){
        return <Card company = {elem.companyName} date = {elem.datePosted} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location} brand = {elem.brandLogo}/>
      })}    
    </div>
  )
}

export default App
