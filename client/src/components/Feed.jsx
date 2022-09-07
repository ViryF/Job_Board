
const Feed = ({ latestJobPosts }) => {

  return (
    <div>
      <div>
        <h1>Hello! My name is Viridiana, and this is my job board website. Take a look around!</h1>
      </div>
      <br></br>
      <div>
        <p>Go ahead and sign up as an Employer if you would like to make your own job posting.</p>
        <p>Otherwise, you can sign up as a seeker if you would like to save and review job postings.</p>
      </div>
      <div className="latest-jobs-grid">
        {
          latestJobPosts?.map((JobPost) => (
            <div className="jobPost-card" key={JobPost.id}>
              <h2>{JobPost.title}</h2>
              <h3>{JobPost.description}</h3>
              <h3>{JobPost.requirements}</h3>
              <h4>{JobPost.location}</h4>
              <h4>{JobPost.salary}</h4>
              <h4>{JobPost.employer}</h4>
              <h4>{JobPost.application_url}</h4>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Feed