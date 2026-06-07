import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      company: "Google",
      datePosted: "5 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Bangalore, India",
      post: "Frontend Developer"
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      company: "Meta",
      datePosted: "1 week ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Hyderabad, India",
      post: "Software Engineer"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      company: "Apple",
      datePosted: "3 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$70/hr",
      location: "Mumbai, India",
      post: "iOS Developer"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      company: "Amazon",
      datePosted: "10 weeks ago",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Chennai, India",
      post: "Cloud Support Engineer"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      company: "Microsoft",
      datePosted: "2 weeks ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Noida, India",
      post: "Backend Engineer"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      company: "Netflix",
      datePosted: "6 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Remote",
      post: "Platform Engineer"
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      company: "NVIDIA",
      datePosted: "4 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hr",
      location: "Pune, India",
      post: "AI Engineer"
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      company: "OpenAI",
      datePosted: "8 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Remote",
      post: "Machine Learning Engineer"
    },
    {
      brandLogo: "https://logo.clearbit.com/uber.com",
      company: "Uber",
      datePosted: "12 days ago",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Bangalore, India",
      post: "React Developer"
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      company: "Adobe",
      datePosted: "9 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Noida, India",
      post: "Full Stack Developer"
    }
  ];
  console.log(jobOpenings);
  return (
    <div className="parent">
      {jobOpenings.map(function(){
        return <Card/>
      })}
    </div>
  )
}

export default App
