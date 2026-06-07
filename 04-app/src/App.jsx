
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      company: "Google",
      datePosted: "5 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Bangalore, India",
      post: "Frontend Developer"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      company: "Meta",
      datePosted: "1 week ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Hyderabad, India",
      post: "Software Engineer"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      company: "Apple",
      datePosted: "3 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$70/hr",
      location: "Mumbai, India",
      post: "iOS Developer"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      company: "Amazon",
      datePosted: "10 weeks ago",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Chennai, India",
      post: "Cloud Support Engineer"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      company: "Microsoft",
      datePosted: "2 weeks ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Noida, India",
      post: "Backend Engineer"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      company: "Netflix",
      datePosted: "6 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Remote",
      post: "Platform Engineer"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      company: "NVIDIA",
      datePosted: "4 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hr",
      location: "Pune, India",
      post: "AI Engineer"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      company: "OpenAI",
      datePosted: "8 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Remote",
      post: "Machine Learning Engineer"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      company: "Uber",
      datePosted: "12 days ago",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Bangalore, India",
      post: "React Developer"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
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
      {jobOpenings.map(function(elem, idx){
        return <div key= {idx}>
          <Card datePosted = {elem.datePosted} company = {elem.company} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location} brand = {elem.brandLogo}/>
          </div>
      })}
    </div>
  )
}

export default App
